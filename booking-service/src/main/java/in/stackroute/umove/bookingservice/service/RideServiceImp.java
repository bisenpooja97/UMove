package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.*;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import in.stackroute.umove.bookingservice.repo.TrackingRepo;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class RideServiceImp implements RideService{


    @Autowired
    RideRepo rideRepo;

    @Autowired
    TrackingRepo trackingRepo;

    @Override
    public Ride confirmRide(Ride ride) {
        rideRepo.save(ride);
        return ride;
    }


    @Override
    public Ride startRide(ObjectId rideId, String registrationNo) {
        LocalDateTime startRideRequestAt = LocalDateTime.now();
        Ride ride = rideRepo.findBy_id(rideId);
        if (ride.getStatus().equals(RideStatus.Confirmed)) {
            LocalDateTime bookedAt = ride.getBookedAt();
            LocalDateTime autoCancelTime = bookedAt.plusMinutes(20);
            int compareValue = startRideRequestAt.compareTo(autoCancelTime);
            if (compareValue <= 0) {
                ride.setStatus(RideStatus.Started);
                ride.setRideStartAt(startRideRequestAt);
                Vehicle vehicle = ride.getVehicle();
                vehicle.setRegistrationNo(registrationNo);
                ride.setVehicle(vehicle);
            }
            else {
                ride.setStatus(RideStatus.Auto_Cancelled);
            }
            rideRepo.save(ride);
            storeTrackingData(ride);
        }
        return ride;

    }

    @Override
    public Ride addExtraCharges(ObjectId rideId, List<ExtraCharge> extraCharges) {
        LocalDateTime rightNow = LocalDateTime.now();
        Ride ride = rideRepo.findBy_id(rideId);
        ride.getPaymentDetail().setExtraCharges(extraCharges);
        ride.setRideEndAt(rightNow);
        LocalDateTime rideStarted = ride.getRideStartAt();
        Duration duration = Duration.between(rideStarted, rightNow);
        int totalDuration = (int) duration.toMinutes();
        ride.setDuration(totalDuration);
        Double distance = calculateTotalDistance(rideId.toHexString());
        ride.setDistance(distance);
        System.out.println("your distance is"+distance);
        rideRepo.save(ride);
//      Double rideAmount = (totalDuration*ride.getVehicle().getType().getCosttime())+(distance*ride.getVehicle().getType().getCostkm());
        ride.getPaymentDetail().setRideAmount(100.0);
        ride.setStatus(RideStatus.Ended);
        rideRepo.save(ride);
        return ride;

    }

    public TrackingLatitudeLongitude storeTrackingData(Ride ride) {
        TrackingLatitudeLongitude trackingLatitudeLongitude = new TrackingLatitudeLongitude();
        if(ride.getStatus().equals(RideStatus.Started))
        {
            LocalDateTime time = LocalDateTime.now();
            trackingLatitudeLongitude.setRideId(ride.get_id());
            trackingLatitudeLongitude.setRiderId(ride.getRider().get_id());
            trackingLatitudeLongitude.setLongitude(new ArrayList<>());
            trackingLatitudeLongitude.setLatitude(new ArrayList<>());
            trackingLatitudeLongitude.setVehicleNumber(ride.getVehicle().getRegistrationNo());
            trackingLatitudeLongitude.setSource(ride.getSourceZone().getLocality());
            for(Zone destZone : ride.getDestinationZones())
            {
                trackingLatitudeLongitude.setDestination(destZone.getLocality());
            }
            trackingLatitudeLongitude.setTimestamps(Collections.singletonList(time));
            System.out.println(trackingLatitudeLongitude);
        }
        System.out.println(trackingRepo.save(trackingLatitudeLongitude));
        return trackingRepo.save(trackingLatitudeLongitude);
    }

    @Override
    public TrackingLatitudeLongitude updateTrackingData(String rideId, String latitude, String longitude) {
        TrackingLatitudeLongitude trackingLatitudeLongitudeData = trackingRepo.findByRideId(rideId);
            LocalDateTime time = LocalDateTime.now();
            trackingLatitudeLongitudeData.getTimestamps().add(time);
            trackingLatitudeLongitudeData.getLatitude().add(Double.parseDouble(latitude));
            trackingLatitudeLongitudeData.getLongitude().add(Double.parseDouble(longitude));
            return trackingRepo.save(trackingLatitudeLongitudeData);
    }

    @Override
    public List<TrackingLatitudeLongitude> getAllTrackingData() {
        return trackingRepo.findAll();
    }

    public double calculateTotalDistance(String rideId)
    {
        TrackingLatitudeLongitude trackingLatitudeLongitudeData = trackingRepo.findByRideId(rideId);
        List<Double> latitude = trackingLatitudeLongitudeData.getLatitude();
        List<Double> longitude = trackingLatitudeLongitudeData.getLongitude();
        int size = latitude.size();
        System.out.println("size of list is"+size);
        double totalDistance = 0.0;
        int j;
        for(j=0;j<size-1 ;j++)
        {
            totalDistance += distance(   latitude.get(j),   latitude.get(j+1),   longitude.get(j),   longitude.get(j+1));
        }
        System.out.println("calculated total distance : " + totalDistance);
        return 0;
    }


    public double distance(double lat1, double lat2, double lon1, double lon2)
    {
        // The math module contains a function
        // named toRadians which converts from
        // degrees to radians.
        double dlon;
        double dlat;

        lon1 = Math.toRadians(lon1);
        lon2 = Math.toRadians(lon2);
        lat1 = Math.toRadians(lat1);
        lat2 = Math.toRadians(lat2);

        // Haversine formula
        dlon = lon2 - lon1;
        dlat = lat2 - lat1;
        double a = Math.pow(Math.sin(dlat / 2), 2)
                + Math.cos(lat1) * Math.cos(lat2)
                * Math.pow(Math.sin(dlon / 2),2);

        double c = 2 * Math.asin(Math.sqrt(a));

        // Radius of earth in kilometers. Use 3956
        // for miles
        double r = 6371;

        // calculate the result
        return(c * r);

    }


}

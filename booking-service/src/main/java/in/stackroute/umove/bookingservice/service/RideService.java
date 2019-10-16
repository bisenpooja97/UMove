package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.PaymentDetail;
import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.model.Vehicle;
import in.stackroute.umove.bookingservice.model.Zone;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class RideService implements RideServiceInterface {

    @Autowired
    private RideRepo rideRepo;

    @Override
    public Ride confirmBooking(Ride ride) {
        ride.setStatus("Confirmed");
        ride.setBookedAt(LocalDateTime.now());
        ride.setPayment(new PaymentDetail());
        rideRepo.save(ride);
        return ride;
    }

    //Function to get ride details by userId and rideStatus
    @Override
    public Ride getRideByUserIdNStatus(String userId, String rideStatus){
        Ride ride = rideRepo.findByUserIdNStatus(userId, rideStatus);
        return ride;
    }

    @Override
    public List<Ride> getAllRides() {
        return rideRepo.findAll();
    }

    //Function to start a ride for the user
    @Override
    public Ride startRide(ObjectId rideId, String registrationNo) {
        LocalDateTime startRideRequestAt = LocalDateTime.now();
        Ride ride = rideRepo.findBy_id(rideId);
        if (ride.getStatus().equalsIgnoreCase("Confirmed")) {
            LocalDateTime bookedAt = ride.getBookedAt();
            LocalDateTime autoCancelTime = bookedAt.plusMinutes(20);
            int compareValue = startRideRequestAt.compareTo(autoCancelTime);
            if (compareValue <= 0) {
                ride.setStatus("started");
                ride.setRideStartAt(startRideRequestAt);
                Vehicle vehicle = ride.getVehicle();
                vehicle.setRegistrationNo(registrationNo);
                ride.setVehicle(vehicle);
            }
            else {
                ride.setStatus("autocancelled");
            }
            rideRepo.save(ride);
        }
        return ride;
    }

    //Function to autocancel a ride for the user
    @Override
    public Ride autocancelRide(ObjectId rideId){
        LocalDateTime startRideRequestAt = LocalDateTime.now();
        Ride ride = rideRepo.findBy_id(rideId);
        if (ride.getStatus().equalsIgnoreCase("Confirmed")) {
            LocalDateTime bookedAt = ride.getBookedAt();
            LocalDateTime autoCancelTime = bookedAt.plusMinutes(20);
            int compareValue = startRideRequestAt.compareTo(autoCancelTime);
            if (compareValue > 0) {
                ride.setStatus("autocancelled");
            }
            rideRepo.save(ride);
        }
        return ride;
    }

    //Function to cancel a ride for the user
    @Override
    public Ride cancelRide(ObjectId rideId) {
        LocalDateTime rightNow = LocalDateTime.now();
        Ride ride = rideRepo.findBy_id(rideId);
        if (ride.getStatus().equalsIgnoreCase("Confirmed")) {
            LocalDateTime bookedAt = ride.getBookedAt();
            LocalDateTime cancel = bookedAt.plusMinutes(5);
            int compareValue = rightNow.compareTo(cancel);
            if (compareValue <= 0) {
                ride.setStatus("cancelled before 5 mins");
            } else {
                ride.setStatus("cancelled after 5 mins");
            }
            rideRepo.save(ride);
        }
        return ride;
    }

    //Function to update destination for a ride
    @Override
    public Ride updateDestination(Zone destinationZone, ObjectId rideId) {
        Ride ride = rideRepo.findBy_id(rideId);
        if (ride.getStatus().equalsIgnoreCase("started")) {
                List<Zone> destinationZones = ride.getDestinationZones();
                destinationZones.add(destinationZone);
                ride.setDestinationZones(destinationZones);
                rideRepo.save(ride);
        }
        return ride;
    }

    //Function to end ride for the user
    @Override
    public Ride endRide(ObjectId rideId) {
        LocalDateTime rightNow = LocalDateTime.now();
        Ride ride = rideRepo.findBy_id(rideId);
        if (ride.getStatus().equalsIgnoreCase("started")) {
            ride.setRideEndAt(rightNow);
            LocalDateTime rideStarted = ride.getRideStartAt();
            Duration duration = Duration.between(rideStarted, rightNow);
            int totalDuration = (int) duration.toMinutes();
            ride.setDuration(totalDuration);
            ride.setStatus("endRideRequest");
            rideRepo.save(ride);
        }
        return ride;
    }

}

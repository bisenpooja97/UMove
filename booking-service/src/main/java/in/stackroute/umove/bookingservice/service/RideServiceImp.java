package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.*;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class RideServiceImp implements RideService {
    @Autowired
    private RideRepo rideRepo;

    @Override
    public Ride cofirmBooking(Ride ride) {
        PaymentDetail paymentDetail = new PaymentDetail();
        paymentDetail.setExtraCharges(new ArrayList<>());
        ride.setPayment(paymentDetail);
        rideRepo.save(ride);
        return ride;
    }

    @Override
    public List<Ride> getAllBookings() {
        return rideRepo.findAll();
    }

    @Override
    public Ride getBookingById(ObjectId id) {
        return rideRepo.findBy_id(id);
    }

    @Override
    public Map<String, Object> deleteAll() {
        rideRepo.deleteAll();
        return null;
    }

    @Override
    public Ride getBookingsByUserIdNStatus(String userId, String bookingStatus){
        Ride booking = rideRepo.findByUserIdNStatus(userId, bookingStatus);
        return booking;
    }

    @Override
    public Ride addExtraCharges(ObjectId bookingId, List<ExtraCharge> extraCharges) {
        Ride booking = rideRepo.findBy_id(bookingId);
        booking.getPayment().setExtraCharges(extraCharges);
        rideRepo.save(booking);
        return booking;
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

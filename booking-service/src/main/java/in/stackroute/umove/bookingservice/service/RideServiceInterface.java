package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.model.Zone;
import org.bson.types.ObjectId;

import java.util.List;

public interface RideServiceInterface {

    Ride confirmBooking(Ride ride);
    Ride getRideByUserIdNStatus(String userId, String bookingStatus);
    List<Ride> getAllRides();
    Ride startRide(ObjectId rideId, String registrationNo);
    Ride autocancelRide(ObjectId rideId);
    Ride cancelRide(ObjectId rideId);
    Ride updateDestination(Zone destinationZone, ObjectId rideId);
    Ride endRide(ObjectId rideId);

}

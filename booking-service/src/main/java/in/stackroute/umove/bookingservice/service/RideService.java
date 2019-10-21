package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.model.Zone;
import org.bson.types.ObjectId;

import java.util.List;

public interface RideService {
    Ride confirmRide(Ride ride);
    Ride getRideByUserIdNStatus(String userId, String bookingStatus);
    List<Ride> getAllRides();
    Ride startRide(ObjectId rideId, String registrationNo);
    Ride cancelRide(ObjectId rideId);
    Ride updateDestination(Zone destinationZone, ObjectId rideId);
}

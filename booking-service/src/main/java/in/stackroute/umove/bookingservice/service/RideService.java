package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.Ride;
import org.bson.types.ObjectId;

import java.util.List;

public interface RideService {

    List<Ride> getRidesByUserId(String userId);
    List<Ride> getAllRides();
    Ride getRidesById(ObjectId id);
    Ride confirmBooking(Ride ride);
}

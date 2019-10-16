package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.model.ExtraCharge;
import org.bson.types.ObjectId;
import in.stackroute.umove.bookingservice.model.Zone;
import java.util.List;
import java.util.Map;

public interface RideService {

    Ride cofirmBooking(Ride ride);
    List<Ride> getAllBookings();
    Ride getBookingById(ObjectId id);
    Map<String, Object> deleteAll();
    Ride getBookingsByUserIdNStatus(String userId, String bookingStatus);
    Ride addExtraCharges(ObjectId bookingId, List<ExtraCharge> extraCharges);

    Ride getRideByUserIdNStatus(String userId, String bookingStatus);
    List<Ride> getAllRides();
    Ride startRide(ObjectId rideId, String registrationNo);
    Ride autocancelRide(ObjectId rideId);
    Ride cancelRide(ObjectId rideId);
    Ride updateDestination(Zone destinationZone, ObjectId rideId);
    Ride endRide(ObjectId rideId);

}

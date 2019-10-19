package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.Payment;
import in.stackroute.umove.bookingservice.model.Payment;
import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.model.ExtraCharge;
import org.bson.types.ObjectId;
import in.stackroute.umove.bookingservice.model.Zone;
import java.util.List;
import java.util.Map;

public interface RideService {

    Ride confirmRide(Ride ride);
    Ride getRideById(ObjectId id);
    Map<String, Object> deleteAll();
    Ride getRideByUserIdNStatus(String userId, String bookingStatus);
    Ride addExtraCharges(ObjectId bookingId, List<ExtraCharge> extraCharges);

    List<Ride> getAllRides();
    Ride startRide(ObjectId rideId, String registrationNo);
    Ride autocancelRide(ObjectId rideId);
    Ride cancelRide(ObjectId rideId);
    Ride updateDestination(Zone destinationZone, ObjectId rideId);
   // Ride endRide(ObjectId rideId);
    Payment payForRide(ObjectId rideId, String paymentId);
    List<Ride> getRidesByUserId(String userId);
    Payment getPaymentDetails(String rideId);
//    Ride endRideRequest(ObjectId rideId);

}

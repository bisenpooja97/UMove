package in.stackroute.umove.bookingservice.service;

    import in.stackroute.umove.bookingservice.model.*;
    import org.bson.types.ObjectId;

    import javax.mail.MessagingException;
    import java.io.IOException;
    import java.util.HashMap;
    import java.util.List;
import java.util.Map;

public interface RideService {

    Ride confirmRide(Ride ride);
    Ride getRideById(ObjectId id);
    Map<String, Object> deleteAll();
    Ride getRideByUserIdNStatus(String userId, RideStatus bookingStatus);
    Ride addExtraCharges(ObjectId bookingId, List<ExtraCharge> extraCharges);

    List<Ride> getAllRides();
    Ride startRide(ObjectId rideId, String registrationNo);
    Ride cancelRide(ObjectId rideId);
    Ride updateDestination(Zone destinationZone, ObjectId rideId);
   // Ride endRide(ObjectId rideId);
    Payment payForRide(ObjectId rideId, String paymentId, PaymentStatus paymentStatus) throws IOException, MessagingException, IOException, MessagingException;;
    List<Ride> getRidesByUserId(String userId);

    Payment getPaymentDetails(String rideId);
//    Ride endRideRequest(ObjectId rideId);

    TrackingLatitudeLongitude updateTrackingData(String rideId, String latitude, String longitude);
    List<TrackingLatitudeLongitude> getAllTrackingData();

    Payment getOutstandingRideDetail(String userId);

    boolean isValidUser(String userId);

    boolean isVehicleTypeAllocated(String zoneId, String typeId);
    boolean isVehicleAllocated(String registrationNo);

    HashMap<String, Integer> getNoOfBookingsVsZone();
    HashMap<String, Integer> getNoOfBookingsVsVehicleType();

}

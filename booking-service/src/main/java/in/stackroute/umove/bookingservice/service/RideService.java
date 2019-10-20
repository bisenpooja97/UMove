package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.Payment;
import in.stackroute.umove.bookingservice.model.Ride;
import org.bson.types.ObjectId;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;


public interface RideService {
    Ride confirmRide(Ride ride);
    List<Ride> getAllRides();
    Ride getRideById(ObjectId id);
    Payment payForRide(ObjectId rideId, String paymentId, String paymentStatus) throws IOException, MessagingException;
    List<Payment> getPaymentDetails(String RideId);
}

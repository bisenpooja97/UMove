package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.Payment;
import in.stackroute.umove.bookingservice.model.Ride;
import org.bson.types.ObjectId;
import java.util.List;


public interface RideServiceImp {
    Ride confirmBooking(Ride ride);

    List<Ride> getAllBookings();

    Ride getBookingById(ObjectId id);

    Payment payForBooking(ObjectId bookingId, String paymentId);

    Payment getPaymentDetails(String bookingId);
}

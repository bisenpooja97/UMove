package in.stackroute.umove.bookingservice.repo;

import in.stackroute.umove.bookingservice.model.Payment;
import in.stackroute.umove.bookingservice.model.PaymentStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PaymentRepo extends JpaRepository<Payment,String> {

    @Query("SELECT p FROM Payment p WHERE p.rideId = ?1")
    Payment findByRideId(String bookingId);
    Payment findByRideIdAndStatus(String bookingId, PaymentStatus status);
}

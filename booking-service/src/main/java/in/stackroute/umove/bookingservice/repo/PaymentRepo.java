package in.stackroute.umove.bookingservice.repo;

import in.stackroute.umove.bookingservice.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PaymentRepo extends JpaRepository<Payment,String> {

    @Query("SELECT p FROM Payment p WHERE p.bookingId = ?1")
    Payment findByBookingId(String bookingId);
}

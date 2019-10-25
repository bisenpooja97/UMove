package in.stackroute.umove.bookingservice.repo;

import in.stackroute.umove.bookingservice.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PaymentRepo extends JpaRepository<Payment,String> {

    @Query("SELECT p FROM Payment p WHERE p.rideId = ?1")
    Payment findByRideId(String rideId);
}

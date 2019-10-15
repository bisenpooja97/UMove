package in.stackroute.umove.bookingservice.model;

import lombok.*;
import org.springframework.context.annotation.Configuration;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "paymentDetails")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int transaction_id;

    @Column
    private String bookingId;

    @Column
    private String rider;

    @Column
    private Long mobile;

    @Column
    private String source;

    @Column
    private String destination;

    @Column
    private Double distance;

    @Column
    private int duration;

    @Column
    private String payment_method_id;

    @Column
    private Double ride_fare;

    @Column
    private int discount_percent;

    @Column
    private Double extra_charges;

    @Column
    private Double amount_paid;

    @Column
    private Double petrolCharges;

    @Column
    private String paymentId;

    @Column
    private LocalDateTime deducted_at;

    @Column
    private String status;

}

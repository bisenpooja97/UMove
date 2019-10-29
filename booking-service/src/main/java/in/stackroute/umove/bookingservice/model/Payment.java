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
    private String rideId;

    @Column
    private String userId;

    @Column
    private String mobile;

    @Column
    private String source;

    @Column
    private String destination;

    @Column
    private Double distance;

    @Column
    private int duration;

    @Column
    private String paymentMethodId;

    @Column
    private Double rideFare;
    @Column
    private int discountPercent;

    @Column
    private Double extraCharges;

    @Column
    private Double amountPaid;

    @Column
    private Double fuelRefillAmount;

    @Column
    private String paymentId;

    @Column
    private LocalDateTime deductedAt;

    @Column
    private PaymentStatus status;

}

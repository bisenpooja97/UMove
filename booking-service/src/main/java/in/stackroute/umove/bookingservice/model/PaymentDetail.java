package in.stackroute.umove.bookingservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import java.util.List;

/*
 * Ride charges and payment details
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PaymentDetail {

    private PaymentStatus status = PaymentStatus.Pending;
    private Double rideAmount=0.0;
    private List<ExtraCharge> extraCharges;
    private Double totalExtraCharges=0.0;
    private Double totalAmount=0.0;
    private Double fuelRefillAmount=0.0;


}

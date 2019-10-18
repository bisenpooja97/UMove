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

    private String status;
    private Integer discount;
    private Double rideAmount;
    private List<ExtraCharge> extraCharges;
    private Double totalExtraCharges;
    private Double totalAmount;
    private Double paidAmount;

}

package in.stackroute.umove.bookingservice.model;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PaymentDetail
{
    private String status;
    private Double rideAmount;
    private List<ExtraCharge> extraCharges;
    private Double totalExtraCharges;
    private Double totalAmount;
    private Double fuelRefillAmount;
}

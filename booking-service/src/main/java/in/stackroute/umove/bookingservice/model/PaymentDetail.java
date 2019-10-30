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
    private PaymentStatus status= PaymentStatus.Pending;
    private Double rideAmount=0.0;
    private List<ExtraCharge> extraCharges;
    private Double fuelRefillAmount=0.0;
    private Double totalExtraCharges=0.0;
    private Double totalAmount=0.0;


}

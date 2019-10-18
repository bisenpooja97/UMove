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
    @NonNull
    private Double rideAmount;
    private List<ExtraCharge> extraCharges;
    private Double fuelRefillAmount;
    @NonNull
    private Double totalExtraCharges;
    @NonNull
    private Double totalAmount;
}

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
    private Integer discount;
    @NonNull
    private Double rideAmount;
    private List<ExtraCharge> extraCharges;
    @NonNull
    private Integer petrolCharges;
    @NonNull
    private Double totalExtraCharges;
    @NonNull
    private Double totalAmount;
    @NonNull
    private Double paidAmount;
}

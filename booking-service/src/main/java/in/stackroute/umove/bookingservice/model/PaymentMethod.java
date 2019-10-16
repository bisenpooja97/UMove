package in.stackroute.umove.bookingservice.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class PaymentMethod
{
    private String _id;
    private String paymentMethodNumber;
    private String paymentType;
    private String paymentProvider;
}

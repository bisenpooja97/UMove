package in.stackroute.umove.bookingservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/*
 * User Payment method detail selected for ride
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PaymentMethod {

    private String _id;
    private String paymentMethodNumber;
    private String paymentType;
    private String paymentProvider;

}

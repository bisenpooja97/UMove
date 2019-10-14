package in.stackroute.umove.userservice.model;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserPaymentMethod
{
    private int pId;
    private String paymentMethodNumber;
    private String paymentType;
    private String paymentProvider;

    public UserPaymentMethod(String paymentMethodNumber, String paymentType, String paymentProvider) {
        this.paymentMethodNumber = paymentMethodNumber;
        this.paymentType = paymentType;
        this.paymentProvider = paymentProvider;
    }
}

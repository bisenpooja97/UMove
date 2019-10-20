package in.stackroute.umove.userservice.model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.Id;

/**
 *   Document Name is Payment under UserDB database
 */

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserPaymentMethod {

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


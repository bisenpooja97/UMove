package in.stackroute.umove.userservice.model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;

@Document
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
/*
 * User details
 */
public class UserData
{
    @Id
    private String id;
    private String name;
    private String mobileNumber;
    private String email;
    private Role role;
    private UserStatus userStatus;
    private DocumentVerification document;
    private List<UserPaymentMethod> paymentMethod;

    public UserData(String name, String mobileNumber, String email, Role role, UserStatus userStatus, DocumentVerification document) {
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.role = role;
        this.userStatus = userStatus;
        this.document = document;
    }

    public UserData(String rahul, String s, String s1, Role user, UserStatus inactive) {
    }


//    public String getId()
//    {
//
//        return id.toHexString();
//    }
//
//    public void setId(ObjectId _id)
//
//    {
//        this.id = id;
//    }

}

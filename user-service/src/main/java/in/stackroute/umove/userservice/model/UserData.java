package in.stackroute.umove.userservice.model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;
import java.util.Set;

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
    private Set<Role> roles;
    private UserStatus userStatus;
    private DocumentVerification document;
    private List<UserPaymentMethod> paymentMethod;

    public UserData( String name, String mobileNumber, String email) {
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    public UserData( String name, String mobileNumber, String email,  Set<Role> roles,  UserStatus userStatus, DocumentVerification documentverification )
    {
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.roles = roles;
        this.userStatus = userStatus;
        this.document=document;
    }

    // ObjectId needs to be converted to string

//    public String get_Id()
//    {
//        return _id.toHexString();
//    }
//
//    public void set_Id(ObjectId _id)
//    {
//        this._id = _id;
//    }

}

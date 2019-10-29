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

    public UserData( String name, String mobileNumber, String email) {
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    public UserData( String name, String mobileNumber, String email,  Role role,  UserStatus userStatus, DocumentVerification documentverification )
    {
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.role = role;
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

package in.stackroute.umove.bookingservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/*
 * User details
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {

    private String _id;
    private String name;
    private String email;
    private String mobileNumber;
}

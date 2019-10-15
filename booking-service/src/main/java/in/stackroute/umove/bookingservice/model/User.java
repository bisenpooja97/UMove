package in.stackroute.umove.bookingservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/*
 * Rider and zone supervisor details model
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {

    private String _id;
    private String name;
    private String email;

}

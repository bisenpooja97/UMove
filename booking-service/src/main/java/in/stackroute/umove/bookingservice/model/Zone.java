package in.stackroute.umove.bookingservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/*
 * Zone details
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Zone {

    private String id;

    // supervisor details
    private String supervisorId;
    private String supervisorName;
    private String supervisorEmail;
    private String supervisorContactNo;

    // zone address
    private Double lat;
    private Double lon;
    private String locality;
    private String city;
    private String state;
    private String country;
    private int pincode;
}

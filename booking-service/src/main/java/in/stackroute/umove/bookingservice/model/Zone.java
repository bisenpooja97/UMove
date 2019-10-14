package in.stackroute.umove.bookingservice.model;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Zone
{
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

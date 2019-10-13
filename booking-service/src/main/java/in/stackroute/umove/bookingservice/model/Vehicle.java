package in.stackroute.umove.bookingservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Vehicle {

    private String _id;
    private String registrationNo;
    private String name;
    private Double costkm;
    private Double costtime;
    private String imageUrl;

}

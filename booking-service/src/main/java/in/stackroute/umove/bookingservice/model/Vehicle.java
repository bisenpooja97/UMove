package in.stackroute.umove.bookingservice.model;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Vehicle
{
    private String _id;
    private String registrationNo;
    private String name;
    private Double costkm;
    private Double costtime;
    private String imageUrl;
}

package in.stackroute.umove.bookingservice.model;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Fuel {
    private String id;
    private String name;
    private Float costFuel;
}

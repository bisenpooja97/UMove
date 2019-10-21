package in.stackroute.umove.vehicleservice.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Document

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

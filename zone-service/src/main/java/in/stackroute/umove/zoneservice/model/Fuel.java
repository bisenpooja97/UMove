package in.stackroute.umove.zoneservice.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.UUID;


@Document
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Fuel {
    private String id = UUID.randomUUID().toString().substring(30);
    private String name;
    private Float fuelCost;

}


package in.stackroute.umove.zoneservice.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.UUID;

@Document
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class VehicleType {

    private String id = UUID.randomUUID().toString().substring(32);
    private String name;
    private float costPerKm;
    private float costPerMin;
    private String vehicleCC;
    private float mileage;
    private String url;
    @DBRef
    private Fuel fuel;
    private float baseFare;


    public VehicleType(String name, Float costPerKm, Float costPerMin) {

        this.name = name;
        this.costPerKm = costPerKm;
        this.costPerMin = costPerMin;
    }

}

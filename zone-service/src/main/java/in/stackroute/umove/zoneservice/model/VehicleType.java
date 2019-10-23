package in.stackroute.umove.zoneservice.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;

@Document
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class VehicleType {

    private String id;
    private String name;
    private float costkm;
    private float costtime;
    private String vehiclecc;
    private float kilometer;
    private String url;
    @DBRef
    private Fuel fuel;
    private float baseFare;


    public VehicleType(String name, int costkm, int costtime) {

        this.name = name;
        this.costkm = costkm;
        this.costtime = costtime;
    }
}

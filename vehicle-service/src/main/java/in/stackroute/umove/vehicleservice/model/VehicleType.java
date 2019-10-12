package in.stackroute.umove.vehicleservice.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class VehicleType {
    @Id
    private String typeId;
    private String name;
    private float costkm;
    private float costtime;
    private float costlt=100;
    private Category category;
    private String vehiclecc;
    private float kilometer;
    private String url;


    public VehicleType(String name, int costkm, int costtime) {

        this.name = name;
        this.costkm = costkm;
        this.costtime = costtime;
    }
}

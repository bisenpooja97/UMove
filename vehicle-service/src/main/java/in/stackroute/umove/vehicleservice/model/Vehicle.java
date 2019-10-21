package in.stackroute.umove.vehicleservice.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Document
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Vehicle {

    private String id;
    private String zoneid;
    private String registrationNo;
    private String insuranceNo;
    private VehicleStatus status;
    private VehicleType type;
    private Date time=new Date();
    private Date lastServiceDate;
    private Date vehiclePurchased;
    private String chassisNumber;

    public Vehicle(String id, String zoneid, String registrationNo) {
        this.id = id;
        this.zoneid = zoneid;
        this.registrationNo = registrationNo;
    }
}

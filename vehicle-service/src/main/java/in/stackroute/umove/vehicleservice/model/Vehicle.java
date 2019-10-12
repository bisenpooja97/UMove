package in.stackroute.umove.vehicleservice.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

@Document
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Vehicle {
    @Id
    private String vehicleId;
    private String zoneid;
    private String registrationNo;
    private String insuranceNo;
    private Status status;
    private VehicleType type;
    private Date time=new Date();
    private Date lastServiceDate;
    private Date vehiclePurchased;

    public Vehicle(String vehicleId, String zoneid, String registrationNo) {
        this.vehicleId = vehicleId;
        this.zoneid = zoneid;
        this.registrationNo = registrationNo;
    }
}

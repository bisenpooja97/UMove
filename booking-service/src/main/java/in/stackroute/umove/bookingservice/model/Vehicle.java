package in.stackroute.umove.bookingservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

/*
 * Vehicle details
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
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

    public Vehicle(String id, String zoneid, String registrationNo) {
        this.id = id;
        this.zoneid = zoneid;
        this.registrationNo = registrationNo;
    }


}

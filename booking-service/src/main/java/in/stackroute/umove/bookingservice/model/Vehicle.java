package in.stackroute.umove.bookingservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

/*
 * Vehicle details
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Vehicle {

    private String id= UUID.randomUUID().toString().substring(30);
    private String zoneId;
    private String registrationNo;
    private String insuranceNo;
    private VehicleStatus status;
    private VehicleType vehicleType;
    private LocalDate lastServiceDate;
    private LocalDate purchasedDate;
    private String chassisNumber;

    public Vehicle(String id, String zoneId, String registrationNo) {
        this.id = id;
        this.zoneId = zoneId;
        this.registrationNo = registrationNo;
    }


}

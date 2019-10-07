package in.stackroute.umove.zoneservice.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Zones {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private double lat;
    private double lon;
    private String city;
    private String state;   
    private String country;
    private int pincode;
    private String locality;
    private int capacity;
    @Temporal(TemporalType.DATE)
    private Date creationTime;
    private int supervisorId;
    private String supervisorName;
    private String supervisorContactNo;
    private String supervisorEmail;

    public Zones(String name, double lat, double lon, String city, String state, String country, int pincode, String locality, int capacity, int supervisorId, String supervisorName, String supervisorContactNo, String supervisorEmail) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
        this.city = city;
        this.state = state;
        this.country = country;
        this.pincode = pincode;
        this.locality = locality;
        this.capacity = capacity;
        this.creationTime = new Date();
        this.supervisorId = supervisorId;
        this.supervisorName = supervisorName;
        this.supervisorContactNo = supervisorContactNo;
        this.supervisorEmail = supervisorEmail;
    }
}

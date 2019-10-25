package in.stackroute.umove.bookingservice.model;

// Importing files
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.Id;
import java.time.LocalDateTime;

/*
 * Zone details
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Zone {

    private String id;
    private String zoneId;
    private String name;
    private double lat;
    private double lon;
    private String city;
    private String state;
    private String country;
    private int pincode;
    private String locality;
    private int capacity;
    private LocalDateTime createdAt;
    private String supervisorId;
    private String supervisorName;
    private String supervisorNumber;
    private String supervisorEmail;
    private ZoneStatus status;


    public Zone(String name, double lat, double lon, String city, String state, String country,String locality, int capacity, String supervisorId,
                String supervisorName, String supervisorNumber, String supervisorEmail,
                ZoneStatus status) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
        this.city = city;
        this.state = state;
        this.country = country;
        this.locality = locality;
        this.capacity = capacity;
        this.supervisorId = supervisorId;
        this.supervisorName = supervisorName;
        this.supervisorNumber = supervisorNumber;
        this.supervisorEmail = supervisorEmail;
        this.status = status;
    }

}

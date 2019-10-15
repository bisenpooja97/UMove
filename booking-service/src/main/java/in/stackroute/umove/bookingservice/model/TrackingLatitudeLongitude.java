package in.stackroute.umove.bookingservice.model;

import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name="trackingData")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class TrackingLatitudeLongitude {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long trackingId;
    @NonNull
    private long bookingId;
    @NonNull
    private long rider_id;
    @NonNull
    private String source;
    @NonNull
    private String destination;
    @NonNull
    private long vehicle_id;
    @NonNull
    @Column
    @ElementCollection(targetClass = Double.class)
    private List<Double> latitude;
    @Column
    @ElementCollection(targetClass = Double.class)
    @NonNull
    private List<Double> longitude;
    @Column
    @ElementCollection(targetClass = Timestamp.class)
    @NonNull
    private List<Timestamp> timestamps;



}

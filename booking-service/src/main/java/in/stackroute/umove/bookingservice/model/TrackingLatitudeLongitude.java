package in.stackroute.umove.bookingservice.model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.List;


@Document(collection="trackingData")
@Data
@NoArgsConstructor
@ToString
@Getter
@Setter
public class TrackingLatitudeLongitude
{
    @Id
    private String _id;
    private String  rideId;
    private String riderId;
    private String source;
    private String destination;
    private String vehicleNumber;
    private List<Double> latitude;
    private List<Double> longitude;
    private List<LocalDateTime> timestamps;
}

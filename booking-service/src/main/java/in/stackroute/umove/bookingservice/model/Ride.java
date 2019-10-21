package in.stackroute.umove.bookingservice.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.List;

/*
 * Ride details
 */

@Document(collection = "bookingList")
@Data
@NoArgsConstructor
@ToString
public class Ride {

    @Id
    private ObjectId _id;
    private RideStatus status;
    private User rider;
    private Zone sourceZone;
    private List<Zone> destinationZones;
    private Vehicle vehicle;
    private PaymentMethod paymentMethod;
    private LocalDateTime bookedAt;
    private LocalDateTime rideStartAt;
    private LocalDateTime rideEndAt;
    private Double distance;
    private int duration;
    private PaymentDetail paymentDetail;
    private PromoCode promoCode;

    // ObjectId needs to be converted to string
    public String get_id() { return _id.toHexString(); }
    public void set_id(ObjectId _id) { this._id = _id; }

}

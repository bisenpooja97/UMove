package in.stackroute.umove.bookingservice.model;

import in.stackroute.umove.bookingservice.model.*;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

/*
 * Vehicle booking details
 */

@Document(collection = "bookingList")
@Data
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Ride
{
    @Id
    private UUID rideId;
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

}

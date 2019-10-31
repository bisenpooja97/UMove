package in.stackroute.umove.reportservice.model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.time.LocalDateTime;


@Document
@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Report {

    @Id
    private ObjectId _id;
    private String user_id;
    private String userName;
    private String srcZone_id;
    private String destZone_id;
    private String vehicle_id;
    private String vehicle_name;
    private String booking_id;
    private LocalDateTime bookingAt;
    private LocalDateTime rideStartedAt;
    private Double rideAmount;
    private LocalDateTime reportCreatedOn;
    private LocalDateTime reportUpdatedOn;

    public Report(String user_id, String userName, String srcZone_id, String destZone_id, String vehicle_id, String vehicle_name, String booking_id, LocalDateTime bookingAt, LocalDateTime rideStartedAt, Double rideAmount, LocalDateTime reportCreatedOn, LocalDateTime reportUpdatedOn) {
        this.user_id = user_id;
        this.userName = userName;
        this.srcZone_id = srcZone_id;
        this.destZone_id = destZone_id;
        this.vehicle_id = vehicle_id;
        this.vehicle_name = vehicle_name;
        this.booking_id = booking_id;
        this.bookingAt = bookingAt;
        this.rideStartedAt = rideStartedAt;
        this.rideAmount = rideAmount;
        this.reportCreatedOn = reportCreatedOn;
        this.reportUpdatedOn = reportUpdatedOn;
    }

    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

//    public String getUser_id() {
//        return user_id;
//    }
//
//    public void setUser_id(String user_id) {
//        this.user_id = user_id;
//    }
//
//    public String getUserName() {
//        return userName;
//    }
//
//    public void setUserName(String userName) {
//        this.userName = userName;
//    }
}

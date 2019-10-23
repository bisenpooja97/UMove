package in.stackroute.umove.bookingservice.model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.Id;

@Document(collection = "config")
@Data
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Configuration {

    @Id
    private ObjectId _id;
    private String name;
    private int value;

    public String get_id() { return _id.toHexString(); }
    public void set_id(ObjectId _id) { this._id = _id; }

}

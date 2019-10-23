package in.stackroute.umove.bookingservice.model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.Id;

@Document(collection = "config")
@Data
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Configuration {

    @Id
    private ObjectId configId;
    private String name;
    private int value;

    void setConfigId(ObjectId configId) {
        this.configId = configId;
    }

    String getConfigId() {
        return configId.toHexString();
    }
}

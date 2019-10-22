package in.stackroute.umove.bookingservice.model;

import lombok.*;
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
    private String name;
    private int value;
}

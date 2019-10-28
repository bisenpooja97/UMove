package in.stackroute.umove.zoneservice.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.UUID;


@Getter
@Setter
@NoArgsConstructor
@Document
public class ZoneTypeCount {
   
    private String id = UUID.randomUUID().toString().substring(30);
    private String zoneId;
    private String typeId;
    private String typeName;
    private int count;
}

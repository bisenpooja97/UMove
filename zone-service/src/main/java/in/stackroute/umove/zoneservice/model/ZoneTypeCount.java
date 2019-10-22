package in.stackroute.umove.zoneservice.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@Document
public class ZoneTypeCount {
    @Id
    private String id;
    private String zoneId;
    private String typeId;
    private String typeName;
    private int count;
}

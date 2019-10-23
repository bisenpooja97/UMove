package in.stackroute.umove.vehicleservice.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class Type {
    @Id
    @GeneratedValue
   private int id;
   private String name;
    private int costkm;
    private int costtime;

}

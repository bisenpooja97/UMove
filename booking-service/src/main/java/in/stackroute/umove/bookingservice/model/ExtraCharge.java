package in.stackroute.umove.bookingservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/*
 * charges list for extra damages or missing goods for vehicle
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ExtraCharge {

    private String chargedFor;
    private Double amount;

}

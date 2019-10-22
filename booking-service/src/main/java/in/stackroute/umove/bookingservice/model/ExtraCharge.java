package in.stackroute.umove.bookingservice.model;

import lombok.*;

/*
 * charges list for extra damages or missing goods for vehicle
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class ExtraCharge {

    private String chargedFor;
    private Double amount;

}

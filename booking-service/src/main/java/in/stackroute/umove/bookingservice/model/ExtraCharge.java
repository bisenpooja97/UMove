package in.stackroute.umove.bookingservice.model;

import lombok.*;

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

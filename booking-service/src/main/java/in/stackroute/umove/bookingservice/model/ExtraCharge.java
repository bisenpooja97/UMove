package in.stackroute.umove.bookingservice.model;

import lombok.*;

@Data
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ExtraCharge {
    private String chargedFor;
    private Double amount;
}

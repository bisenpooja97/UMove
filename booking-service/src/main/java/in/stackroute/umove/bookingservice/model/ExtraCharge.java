package in.stackroute.umove.bookingservice.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class ExtraCharge
{
    private String chargedFor;
    private Double amount;
}

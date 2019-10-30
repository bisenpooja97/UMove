package in.stackroute.umove.bookingservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Campaign {
    private String campaignId;
    private String name;
    private String code;
    private int discountPercent=0;
}

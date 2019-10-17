package in.stackroute.umove.bookingservice.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PromoCode {
    private String id;
    private String name;
    private int discountPercent;
    private String code;
}

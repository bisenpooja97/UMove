package in.stackroute.umove.bookingservice.model;

import lombok.*;
import org.springframework.web.bind.annotation.GetMapping;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class User {

    private String _id;
    private String name;
    private String email;
    private String mobileNumber;
}

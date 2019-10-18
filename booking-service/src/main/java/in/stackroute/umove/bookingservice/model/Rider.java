package in.stackroute.umove.bookingservice.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Rider {
    private String _id;
    private String name;
    private String email;
    private Long mobile;
}

package in.stackroute.umove.bookingservice.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class User
{
    private String _id;
    private String name;
    private String email;
}

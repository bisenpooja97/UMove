package in.stackroute.umove.userservice.controller;
import in.stackroute.umove.userservice.model.Role;
import lombok.*;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthBody {

    private String mobileNumber;
    private Set<Role> roles;
}

package in.stackroute.umove.userservice.service.implementation;

import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String mobileNumber) throws UsernameNotFoundException {

        UserData user = userRepository.findByMobileNumber(mobileNumber);
        if(user != null){
            // Remember that Spring needs roles to be in this format: "ROLE_" + userRole (i.e. "ROLE_ADMIN")
            // So, we need to set it to that format, so we can verify and compare roles (i.e. hasRole("ADMIN")).

            Collection<GrantedAuthority> grantedAuthorities = new ArrayList<>();
            user.getRoles().stream().forEach(role -> {
                GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(role.name());
                System.out.println("Role name:" +role.name());
                grantedAuthorities.add(grantedAuthority);
            });

            // The "User" class is provided by Spring and represents a model class for user to be returned by UserDetailsService
            // And used by auth manager to verify and check user authentication.
            return new User(user.getMobileNumber(), encoder.encode("123"), grantedAuthorities);
        }
        // If user not found. Throw this exception.
        throw new UsernameNotFoundException("Mobile number: " + mobileNumber + " not found");
    }


}


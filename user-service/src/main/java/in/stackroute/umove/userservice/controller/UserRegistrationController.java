package in.stackroute.umove.userservice.controller;

import in.stackroute.umove.userservice.config.JwtConfig;
import in.stackroute.umove.userservice.config.JwtTokenProvider;
import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.repository.UserRepository;
import in.stackroute.umove.userservice.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

import lombok.extern.java.Log;

import static org.springframework.http.ResponseEntity.ok;

@Log
@RestController
@RequestMapping(value = "v1/api/user")
public class UserRegistrationController {


    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private UserService userService;


    private AuthenticationManager authManager;

    private final JwtConfig jwtConfig;

    public UserRegistrationController(AuthenticationManager authManager, JwtConfig jwtConfig) {
        this.authManager = authManager;
        this.jwtConfig = jwtConfig;
    }

//    @PostMapping(value = "/create")
//    public ResponseEntity createUser(@RequestBody UserData userData){
//        userRepository.save(userData);
//        return ResponseEntity.ok("User Registration Successfully Completed");
//    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UserData data) {
        try {
            Map<Object, Object> model = new HashMap<>();

            Iterator<Role> iterator = data.getRoles().iterator();
            if(iterator.hasNext() && iterator.next().equals(Role.ROLE_SUPERVISOR)) {
                if(userService.isVerifiedSupervisor(data)) {
                    authManager.authenticate(new UsernamePasswordAuthenticationToken(data.getMobileNumber(), "123"));
                    String token = jwtTokenProvider.createToken(data.getMobileNumber(),
                            this.userRepository.findByMobileNumber(data.getMobileNumber()).getRoles());

                    model.put("username", data.getMobileNumber());
                    model.put("token", token);
                    model.put("data", userRepository.findByMobileNumber(data.getMobileNumber()));
                    model.put("status", HttpStatus.OK);
                }
                else {
                    model.put("username", data.getMobileNumber());
                    model.put("status", "Failed");
                }
            }
            else {

                UserData addedUser = userService.addUser(data);
                String username = data.getMobileNumber();
                System.out.println("repo" + this.userRepository + " roles" + this.userRepository.findByMobileNumber(username).getRoles());
                System.out.println(username);
                System.out.println(username + " | " + this.userRepository.findByMobileNumber(username).getRoles());
                authManager.authenticate(new UsernamePasswordAuthenticationToken(username, "123"));
                String token = jwtTokenProvider.createToken(username, this.userRepository.findByMobileNumber(username).getRoles());
                System.out.println("my token" + token);
                System.out.println(this.userRepository.findByMobileNumber(username).getRoles());

                model.put("username", username);
                model.put("token", token);
                model.put("data", addedUser);
                model.put("status", HttpStatus.OK);
            }
            return ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid email/password supplied");
        }
    }

//    @SuppressWarnings("rawtypes")
//    @PostMapping("/register")
//    public ResponseEntity register(@RequestBody UserData user) {
//        UserData userExists = userRepository.findByMobileNumber(user.getMobileNumber());
//        if (userExists != null) {
//            throw new BadCredentialsException("User with username: " + user.getMobileNumber() + " already exists");
//        }
//        userRepository.save(user);
//        Map<Object, Object> model = new HashMap<>();
//        model.put("message", "User registered successfully");
//        return ok(model);
//    }
}

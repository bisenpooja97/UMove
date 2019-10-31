package in.stackroute.umove.userservice.config;

import in.stackroute.umove.userservice.model.Role;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Set;

@Component
public class JwtTokenProvider {

    private final JwtConfig jwtConfig;

    public JwtTokenProvider(JwtConfig jwtConfig) {
        this.jwtConfig = jwtConfig;
    }

    public String createToken(String mobile, Set<Role> set) {
//        Long now = System.currentTimeMillis();
//        System.out.println("aaj ki date" + new Date(now));
        Claims claims = Jwts.claims().setSubject(mobile);
        claims.put("roles", set);
//        System.out.println("expiration time: " + jwtConfig.getExpiration());
//        System.out.println("token expiry date: " + new Date(now + jwtConfig.getExpiration() * 1000));
        //        System.out.println("expiration time: " + jwtConfig.getExpiration());
        Date now = new Date();
        Date validity = new Date(now.getTime() + jwtConfig.getExpiration());
        System.out.println("token expiry date: " + validity);
        System.out.println("sign key" + jwtConfig.getSecret().getBytes());
        return Jwts.builder()//
                .setClaims(claims)//
                .setIssuedAt(now)//
                .setExpiration(validity)//
                .signWith(SignatureAlgorithm.HS512, jwtConfig.getSecret().getBytes())
                .compact();
    }
}

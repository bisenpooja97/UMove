package in.stackroute.umove.apigateway.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletResponse;


@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtConfig jwtConfig;

    public SecurityConfig(JwtConfig jwtConfig) {
        this.jwtConfig = jwtConfig;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        System.out.println("configure");
        http.csrf().disable() //Disabling CSRF
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .exceptionHandling().authenticationEntryPoint((req, rsp, e) -> rsp.sendError(HttpServletResponse.SC_UNAUTHORIZED))
                .and()
                // Add a filter to validate the tokens with every request
                .addFilterAfter(new JwtTokenAuthenticationFilter(jwtConfig), UsernamePasswordAuthenticationFilter.class)
                // authorization requests config
                .authorizeRequests()
                // allow all who are accessing "auth" service
                .antMatchers(HttpMethod.POST, jwtConfig.getUri()).permitAll()

                .antMatchers("/").permitAll()
                .antMatchers("/adminwebapp/**").permitAll()
                .antMatchers("/userservice/api/v1/**").permitAll()
                .antMatchers("/bookingservice/**").permitAll()
                .antMatchers("/campaignservice/**").permitAll()
                .antMatchers("/vehicleservice/**").permitAll()
                .antMatchers("/zoneservice/**").permitAll()
                .antMatchers("/reportservice/**").permitAll()

                .antMatchers("/userservice/v1/api/user/register").permitAll()
                .antMatchers("/userservice/v1/api/user/login").permitAll()

                // must be an admin if trying to access admin area (authentication is also required here)
//                .antMatchers("/userservice/api/v1/**").hasRole("ADMIN")
                // Any other request must be authenticated
                .anyRequest().authenticated();
    }


}

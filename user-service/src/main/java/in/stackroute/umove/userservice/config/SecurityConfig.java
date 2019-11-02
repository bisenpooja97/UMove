package in.stackroute.umove.userservice.config;

import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.security.JwtUsernameAndPasswordAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.servlet.http.HttpServletResponse;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsServiceImpl;

    @Autowired
    private BCryptPasswordEncoder cryptPasswordEncoder;

    @Autowired
    private JwtConfig jwtConfig;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        System.out.println("jwtCongfig auth url: " + jwtConfig.getAuthUrl());
        http
                .csrf().disable()
                // make sure we use stateless session; session won't be used to store user's state.
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                // handle an authorized attempts
                .exceptionHandling().authenticationEntryPoint((req, rsp, e) -> rsp.sendError(HttpServletResponse.SC_UNAUTHORIZED))
                .and()
//                // Add a filter to validate user credentials and add token in the response header
//
//                // What's the authenticationManager()?
//                // An object provided by WebSecurityConfigurerAdapter, used to authenticate the user passing user's credentials
//                // The filter needs this auth manager to authenticate the user.
                .addFilter(new JwtUsernameAndPasswordAuthenticationFilter(authenticationManager(), jwtConfig));
//                .authorizeRequests()
//                // allow all POST requests
//                .antMatchers(HttpMethod.POST, "/v1/api/user/create").permitAll()
//                //.antMatchers(HttpMethod.POST, jwtConfig.getUri()).permitAll()
//                .antMatchers(HttpMethod.POST, "/v1/api/user/register").permitAll()
//                .antMatchers(HttpMethod.POST, "/v1/api/user/login").permitAll()
////                .antMatchers(HttpMethod.POST, jwtConfig.getAuthUrl()).permitAll()
//                // any other requests must be authenticated
//                .antMatchers("/api/v1/users/**").hasRole("ADMIN")
//                .anyRequest().authenticated();
   }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    // Spring has UserDetailsService interface, which can be overridden to provide our implementation for fetching user from database (or any other source).
    // The UserDetailsService object is used by the auth manager to load the user from database.
    // In addition, we need to define the password encoder also. So, auth manager can compare and verify passwords.
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsServiceImpl).passwordEncoder(cryptPasswordEncoder);
    }

}

package in.stackroute.umove.userservice;

import in.stackroute.umove.userservice.config.FileStorageProperties;
import in.stackroute.umove.userservice.config.JwtConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.io.IOException;

@EnableEurekaClient
@EnableHystrix
@SpringBootApplication
@EnableConfigurationProperties({
        FileStorageProperties.class
})

public class UserServiceApplication {

    public static void main(String[] args) throws IOException {
        SpringApplication.run(UserServiceApplication.class, args);
    }
    @Bean
    public JwtConfig jwtConfig() {
        return new JwtConfig();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }
}

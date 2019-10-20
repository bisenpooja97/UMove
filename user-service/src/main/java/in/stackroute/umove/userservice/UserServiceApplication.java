package in.stackroute.umove.userservice;

import in.stackroute.umove.userservice.config.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;

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
}

package in.stackroute.umove.adminwebapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class AdminWebappApplication {

    public static void main(String[] args) {
        SpringApplication.run(AdminWebappApplication.class, args);
    }
}

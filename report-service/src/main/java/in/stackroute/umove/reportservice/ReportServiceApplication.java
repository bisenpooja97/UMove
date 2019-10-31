package in.stackroute.umove.reportservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;

import java.io.IOException;

@RefreshScope
@EnableHystrix
@EnableEurekaClient
@SpringBootApplication
public class ReportServiceApplication {

    public static void main(String[] args) throws IOException {
        SpringApplication.run(ReportServiceApplication.class, args);
        System.in.read();
    }
}

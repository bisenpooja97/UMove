package in.stackroute.umove.campaignservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;

import java.io.IOException;

@EnableEurekaClient
@EnableHystrix
@SpringBootApplication
public class CampaignServiceApplication {

    public static void main(String[] args) throws IOException {
        SpringApplication.run(CampaignServiceApplication.class, args);
        System.in.read();
    }

}

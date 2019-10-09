package in.stackroute.umove.bookingservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;

import java.io.IOException;

@RefreshScope
@EnableEurekaClient
@EnableHystrix
@SpringBootApplication
public class BookingServiceApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(BookingServiceApplication.class, args);
		System.in.read();
	}

}

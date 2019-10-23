package in.stackroute.umove.vehicleservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;

import java.io.IOException;

@EnableEurekaClient
@EnableHystrix
@SpringBootApplication
public class VehicleServiceApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(VehicleServiceApplication.class, args);
		System.in.read();
	}

}

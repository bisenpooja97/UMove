package in.stackroute.umove.vehicleservice;

import in.stackroute.umove.vehicleservice.config.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;

import java.io.IOException;

@RefreshScope
@EnableEurekaClient
@EnableHystrix
@SpringBootApplication
@EnableConfigurationProperties({
		FileStorageProperties.class
})
public class VehicleServiceApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(VehicleServiceApplication.class, args);
	}

}

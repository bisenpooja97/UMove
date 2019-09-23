package in.stackroute.umove.zoneservice;

import in.stackroute.umove.zoneservice.model.Zones;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;

import java.io.IOException;
import java.text.DecimalFormat;

@EnableEurekaClient
@EnableHystrix
@SpringBootApplication
public class ZoneServiceApplication implements ApplicationListener {
	public static void main(String[] args) throws IOException {
		SpringApplication.run(ZoneServiceApplication.class, args);
		System.in.read();
	}

	@Override
	public void onApplicationEvent(ApplicationEvent applicationEvent) {
		for (int i=0;i<100;i++){
			double minLat = -90.00;
			double maxLat = 90.00;
			double latitude = minLat + (double)(Math.random() * ((maxLat - minLat) + 1));
			double minLon = 0.00;
			double maxLon = 180.00;
			double longitude = minLon + (double)(Math.random() * ((maxLon - minLon) + 1));
			DecimalFormat df = new DecimalFormat("#.#####");
			Zones zone = new Zones("Zone-1", latitude,longitude, "Bangalore", "Karnataka", "India",
				560034, "Koramangala", 10, 1, "Bherulal",
				"9196768866", "Bherulal@gmail.com");

	}
}}

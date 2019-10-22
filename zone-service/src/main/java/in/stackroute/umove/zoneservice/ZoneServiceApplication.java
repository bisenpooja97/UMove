package in.stackroute.umove.zoneservice;

import in.stackroute.umove.zoneservice.configuration.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@RefreshScope
@EnableEurekaClient
@EnableHystrix
@SpringBootApplication
@EnableConfigurationProperties({
		FileStorageProperties.class
})
public class ZoneServiceApplication {
	public static void main(String[] args) throws IOException {
		SpringApplication.run(ZoneServiceApplication.class, args);
		System.in.read();
	}

	@Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}
}

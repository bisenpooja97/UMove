package in.stackroute.umove.apigateway;

import in.stackroute.umove.apigateway.config.JwtConfig;
import in.stackroute.umove.apigateway.config.RibbonConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.ribbon.RibbonClients;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//@RefreshScope
@EnableZuulProxy
@EnableEurekaClient
//@RibbonClients(defaultConfiguration = RibbonConfiguration.class)
@SpringBootApplication
public class ApiGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }
    @Bean
    public JwtConfig jwtConfig() {
        System.out.println("jwtConfig ka bean bna rhe h");
        return new JwtConfig();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        System.out.println("BCypt ka bean bna rhe h");
        return new BCryptPasswordEncoder();
    }

}


package in.stackroute.umove.reportservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class ReportServiceApplication {

    public static void main(String[] args) throws IOException {
        SpringApplication.run(ReportServiceApplication.class, args);
        System.in.read();
    }

}

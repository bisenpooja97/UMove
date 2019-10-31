package in.stackroute.umove.reportservice.seeder;

import in.stackroute.umove.reportservice.model.Report;
import in.stackroute.umove.reportservice.repository.RoleRepository;
import in.stackroute.umove.reportservice.service.implementation.ReportService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Component
public class SeedCommandLineRunner implements CommandLineRunner {

    @Autowired
    private ReportService reportService;

//    LocalDate date = LocalDate.now();
//    LocalDateTime bookingAt = LocalDateTime.parse("2019-10-10T09:11:03.460446");
//    LocalDateTime rideStartedAt = LocalDateTime.parse("2019-10-10T09:22:03.460446");
//    LocalDateTime reportCreatedOn = LocalDateTime.parse("2019-10-10T10:11:03.460446");
//    LocalDateTime reportUpdatedOn = LocalDateTime.parse("2019-10-10T11:11:03.460446");
    @Override
    public void run(String... args) throws Exception {

//        Report report = new Report("123","Divyanshu","z123","z234","v456","Activa","b123",bookingAt,
//                rideStartedAt,201.00,reportCreatedOn,reportUpdatedOn);
//        reportService.addReport(report);
    }

}


//     Report report = new Report("123","Divyanshu");
//        reportService.addReport(report);

package in.stackroute.umove.reportservice.service;

import in.stackroute.umove.reportservice.model.Report;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public interface ReportServiceInterface {
    List<Report> getReportList();
    Report addReport(Report report);
    Optional<Report> getReportById(ObjectId _id);
    Map<Date, Integer> findReportByBookingSlot(Date startDate, int noOfHours);
//    Map<Date, Integer> findReportByBookingMonth(Date startDate, int noOfMonths);
}

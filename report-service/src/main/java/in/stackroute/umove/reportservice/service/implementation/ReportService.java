package in.stackroute.umove.reportservice.service.implementation;

import in.stackroute.umove.reportservice.model.Report;
import in.stackroute.umove.reportservice.repository.RoleRepository;
import in.stackroute.umove.reportservice.service.ReportServiceInterface;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.*;

@Service
public class ReportService implements ReportServiceInterface {

    @Autowired(required = true)
    RoleRepository roleRepository;
    @Override
    public List<Report> getReportList() {
        return roleRepository.findAll();
    }

    @Override
    public Optional<Report> getReportById(ObjectId _id) {
        return roleRepository.findById(_id);
    }

    @Override
    public Report addReport(Report report){
        return roleRepository.save(report);
   }

    @Override
    public Map<Date, Integer> findReportByBookingSlot(Date startDate, int noOfHours) {
        Map<Date, Integer> result = new LinkedHashMap<>();
        if (startDate!=null && noOfHours>0) {
            result.put(startDate, 0);
            Calendar cal = Calendar.getInstance();
            cal.setTime(startDate);
            int i = 0;
            while (++i <= noOfHours) {
                cal.setTime(startDate);
                cal.add(Calendar.HOUR_OF_DAY, 1);
                Date endDate = cal.getTime();
                List<Report> reportList = roleRepository.findReportByBookingAt(
                        startDate,
                        endDate);
                result.put(endDate, reportList.size());
                startDate = endDate;
            }
        }
        return result;
    }

//    @Override
//    public Map<Date, Integer> findReportByBookingMonth(Date startDate, int noOfMonths) {
//        Map<Date, Integer> result = new LinkedHashMap<>();
//        if (startDate!=null && noOfMonths>0) {
//            result.put(startDate, 0);
//            Calendar cal = Calendar.getInstance();
//            cal.setTime(startDate);
//            int i = 0;
//            while (++i <= noOfMonths) {
//                cal.setTime(startDate);
//                cal.add(Calendar.DAY_OF_MONTH, 1);
//                Date endDate = cal.getTime();
//                List<Report> reportList = roleRepository.findReportByBookingAt(
//                        startDate,
//                        endDate);
//                result.put(endDate, reportList.size());
//                startDate = endDate;
//            }
//        }
//        return result;
//    }
}


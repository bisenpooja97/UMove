package in.stackroute.umove.reportservice.controller;

import in.stackroute.umove.reportservice.model.Report;
import in.stackroute.umove.reportservice.service.ReportServiceInterface;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("api/v1")
public class ReportController {

    @Autowired
    private ReportServiceInterface reportServiceInterface;

    @GetMapping("/reports")
    public ResponseEntity<Map> getReportList()
    {
        List<Report> data = reportServiceInterface.getReportList();
        Map<String, Object> map = new TreeMap<>();
        map.put("data", data);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping("/reports/{id}")
    public ResponseEntity<Map> getReportById(@PathVariable("id") ObjectId _id)
    {
        Optional<Report> data = reportServiceInterface.getReportById(_id);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", data);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PostMapping(path = "/reports/addreport")
    public ResponseEntity<Map> addReport(@RequestBody Report report) {
        Report addedreport = reportServiceInterface.addReport(report);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", addedreport);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    @GetMapping("/reports/bookingAt")
    public ResponseEntity<Map> findReportByBookingTime(
            @RequestParam(value ="date", required = false) @DateTimeFormat(iso= DateTimeFormat.ISO.DATE) Date startDate,
            @RequestParam(value ="count", required=false)Integer noOfHours) {
        if (startDate==null) startDate=new Date();
        if (noOfHours==null) noOfHours = 24;
        Map<Date, Integer> result = reportServiceInterface.findReportByBookingSlot(startDate, noOfHours);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", (result!=null)?result:"{}");
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping("/reports/bookingcount")
    public ResponseEntity<Map> findReportCountByBookingTime(
            @RequestParam(value ="date", required = false) @DateTimeFormat(iso= DateTimeFormat.ISO.DATE) Date startDate,
            @RequestParam(value ="count", required=false)Integer noOfHours) {
        if (startDate==null) startDate=new Date();
        if (noOfHours==null) noOfHours = 24;
        Map<Date, Integer> result = reportServiceInterface.findReportByBookingSlot(startDate, noOfHours);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", (result!=null)?result.values():"[]");
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}

package in.stackroute.umove.bookingservice.controller;

import in.stackroute.umove.bookingservice.model.Payment;
import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.model.RideStatus;
import in.stackroute.umove.bookingservice.service.RideService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@RestController
@RequestMapping(value = "api/v1")
public class RideController {

    @Autowired
    private RideService rideService;

    // End Point: api/v1/rides Method: POST
    // to confirm ride for a vehicle
    @PostMapping("rides")
    public ResponseEntity<Map> confirmBooking(@RequestBody Ride ride) {

        // if vehicle is allocated and outstanding amount is checked and there is no pending outstanding amount then set status as confirmed
        ride.setStatus(RideStatus.Confirmed);
        ride.setBookedAt(LocalDateTime.now());
        Ride rideDetails = rideService.confirmRide(ride);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", rideDetails);
        map.put("status", HttpStatus.CREATED);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    // End Point: api/v1/rides Method: GET
    // to get the list of all rides
    @GetMapping("rides")
    public ResponseEntity<Map> getBookings() {
        List<Ride> rides = rideService.getAllRides();
        Map<String, Object> map = new TreeMap<>();
        map.put("data", rides);
        map.put("count", rides.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    // End Point: api/v1/rides/{id} Method: GET
    // to get a specific rides details by id
    @GetMapping("rides/{rideId}")
    public ResponseEntity<Map> getBookingById(@PathVariable("rideId") ObjectId id) {
        System.out.println("id:" + id);
        Ride rides = rideService.getRideById(id);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", rides);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    // End Poin>t: api/v1/payments Method: PUT
    // to pay for a specific ride by id
    @PutMapping("rides/payments")
    public ResponseEntity<Map> payForBooking(@RequestParam(value = "rideId") ObjectId rideId, @RequestParam(value = "paymentId") String paymentId, @RequestParam(value="paymentStatus") String paymentStatus) throws IOException, MessagingException {
        Payment payment = rideService.payForRide(rideId, paymentId, paymentStatus);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", payment);
        map.put("status", HttpStatus.CREATED);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    // End Point: api/v1/payments/rideId Method: GET
    // to get payment Details for a specific ride by rideId
    @GetMapping("rides/payments/{rideId}")
    public ResponseEntity<Map> getPaymentDetails(@PathVariable("rideId") String rideId)
    {
        List<Payment> payments = rideService.getPaymentDetails(rideId);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", payments);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}

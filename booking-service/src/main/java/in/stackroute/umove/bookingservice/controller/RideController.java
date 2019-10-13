package in.stackroute.umove.bookingservice.controller;

import in.stackroute.umove.bookingservice.exception.RideAlreadyBookedException;
import in.stackroute.umove.bookingservice.exception.RideNotFoundException;
import in.stackroute.umove.bookingservice.model.ExtraCharge;
import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.service.RideService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@RestController
@RequestMapping("api/v1")
public class RideController {

    @Autowired
    private RideService rideService;

    // End Point: api/v1/bookings Method: POST
    // to confirm booking for a vehicle
    @PostMapping("rides")
    public ResponseEntity<Map> confirmBooking(@RequestBody() Ride ride) {
        Ride currentRide = rideService.getBookingsByUserIdNStatus(ride.getRider().get_id(), "Confirmed");
        if(currentRide != null)  {
            throw new RideAlreadyBookedException("Ride", "userId", ride.getRider().get_id());
        }
//        if(bookingServiceInterface.)
        // if vehicle is allocated and outstanding amount is checked and there is no pending outstanding amount then set status as confirmed
        ride.setStatus("Confirmed");
        ride.setBookedAt(LocalDateTime.now());
        Ride rideDetails = rideService.cofirmBooking(ride);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", rideDetails);
        map.put("status", HttpStatus.CREATED);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    // End Point: api/v1/bookings Method: GET
    // to get all the bookings list
    @GetMapping("rides")
    public ResponseEntity<Map> getBookings() {
        List<Ride> bookings = rideService.getAllBookings();
        Map<String, Object> map = new TreeMap<>();
        map.put("data", bookings);
        map.put("count", bookings.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    // End Point: api/v1/bookings/{id} Method: GET
    // to get a specific booking details
    @GetMapping("rides/{rideId}")
    public ResponseEntity<Map> getBookingById(@PathVariable("rideId") ObjectId id) {
        if(id == null) {
            throw new RideNotFoundException("Ride", "rideId", id);
        }
        System.out.println("id:" + id);
        Ride ride = rideService.getBookingById(id);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    // End Point: api/v1/bookings/{bookingId}/extra-charges
    // to apply extra charges from supervisior side at zone for a specific ride
    @PatchMapping("rides/{rideId}/extra-charges")
    public ResponseEntity<Map> addExtraCharge(@PathVariable("rideId") ObjectId bookingId, @RequestBody() List<ExtraCharge> extraCharges) {
        Ride ride = rideService.addExtraCharges(bookingId, extraCharges);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    @DeleteMapping("rides")
    public ResponseEntity<Map> deleteAllRides() {
        rideService.deleteAll();
        Map<String, Object> map = new TreeMap<>();
        map.put("message", "All rides are deleted successfully.");
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

}

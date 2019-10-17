package in.stackroute.umove.bookingservice.controller;

import in.stackroute.umove.bookingservice.exception.RideAlreadyBookedException;
import in.stackroute.umove.bookingservice.exception.RideNotFoundException;
import in.stackroute.umove.bookingservice.model.ExtraCharge;
import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.service.RideService;
import in.stackroute.umove.bookingservice.model.Zone;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@RestController
@RequestMapping("api/v1")
public class RideController {

    private final SimpMessagingTemplate template;

    @Autowired
    RideController(SimpMessagingTemplate template) {
        this.template = template;
    }

    @Autowired
    private RideService rideService;

    // End Point: api/v1/rides Method: POST
    // to confirm booking for a ride
    //Create rides
    @PostMapping("rides")
    public ResponseEntity<Map> confirmBooking(@RequestBody() Ride ride) {
        Ride currentRide = rideService.getRideByUserIdNStatus(ride.getRider().get_id(), "Confirmed");
        if(currentRide != null)  {
            throw new RideAlreadyBookedException("Ride", "userId", ride.getRider().get_id());
        }
//        if(bookingServiceInterface.)
        // if vehicle is allocated and outstanding amount is checked and there is no pending outstanding amount then set status as confirmed
        ride.setStatus("Confirmed");
        ride.setBookedAt(LocalDateTime.now());
        Ride rideDetails = rideService.confirmRide(ride);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", rideDetails);
        map.put("status", HttpStatus.CREATED);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }


    // End Point: api/v1/rides Method: GET
    // to get all the rides list
    // End Point: api/v1/rides?userId Method: GET
    // to get all the rides list for a particular user
    // Retrieve
    @GetMapping("rides")
    public ResponseEntity<Map> getRides(@RequestParam(value = "userId", required = false) String userId, @RequestParam(value = "rideStatus", required = false) String rideStatus) {
        if(userId!= null && rideStatus!= null) {
            Ride ride = rideService.getRideByUserIdNStatus(userId, rideStatus);
            Map<String, Object> map = new TreeMap<>();
            map.put("data", ride);
            map.put("status", HttpStatus.OK);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else if(userId!= null && !userId.isEmpty())
        {
            List<Ride> rides = rideService.getRidesByUserId(userId);
            Map<String, Object> map = new TreeMap<>();
            map.put("data", rides);
            map.put("count", rides.size());
            map.put("status", HttpStatus.OK);
            return new ResponseEntity<Map>(map, HttpStatus.OK);
        }
        List<Ride> rides = rideService.getAllRides();
        Map<String, Object> map = new TreeMap<>();
        map.put("data", rides);
        map.put("count", rides.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }
    // End Point: api/v1/rides/{ridesId} Method: GET
    // to get a specific rides details by ridesId
    @GetMapping("rides/{rideId}")
    public ResponseEntity<Map> getRideById(@PathVariable("rideId") ObjectId id) {
        if(id == null) {
            throw new RideNotFoundException("Ride", "rideId", id);
        }
        System.out.println("id:" + id);
        Ride ride = rideService.getRideById(id);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    // End Point: api/v1/bookings/{bookingId}/extra-charges
    // to apply extra charges from supervisior side at zone for a specific ride
    @PatchMapping("rides/{rideId}/extra-charges")
    public ResponseEntity<Map> addExtraCharge(@PathVariable("rideId") ObjectId rideId, @RequestBody() List<ExtraCharge> extraCharges) {
        System.out.println("Extracharge" + extraCharges + " | ride id " + rideId);
        Ride ride = rideService.addExtraCharges(rideId, extraCharges);
        this.template.convertAndSend("/end-ride", "ride end ho gai!!!");
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    //Api end point for start ride request by the user
    @PatchMapping("rides/{rideId}/start")
    public ResponseEntity<Map> startRideRequest(@PathVariable("rideId") ObjectId rideId, @RequestParam(value = "vehicleNumber", required = true) String registrationNo) {
        Ride ride = rideService.startRide(rideId, registrationNo);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    //Api end point for autocancel ride request by the user
    @PatchMapping("rides/{rideId}/autocancel")
    public ResponseEntity<Map> autocancelRide(@PathVariable("rideId") ObjectId rideId) {
        Ride ride = rideService.autocancelRide(rideId);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    //Api end point for cancel ride request by the user
    @PatchMapping("rides/{rideId}/cancel")
    public ResponseEntity<Map> cancelRideRequest(@PathVariable("rideId") ObjectId rideId) {
        Ride ride = rideService.cancelRide(rideId);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    //Api end point for change destination request by the user
    @PatchMapping("rides/{rideId}/changeDestination")
    public ResponseEntity<Map> changeDestinationRequest(@RequestBody Zone destinationZone, @PathVariable("rideId") ObjectId rideId) {
        Ride ride = rideService.updateDestination(destinationZone, rideId);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    //Api end point for end ride request by the user
    @PatchMapping("rides/{rideId}/end")
    public ResponseEntity<Map> endRideRequest(@PathVariable("rideId") ObjectId rideId) {
        Ride ride = rideService.endRide(rideId);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
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

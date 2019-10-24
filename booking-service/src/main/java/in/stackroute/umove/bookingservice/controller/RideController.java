package in.stackroute.umove.bookingservice.controller;

import in.stackroute.umove.bookingservice.exception.RideAlreadyBookedException;
import in.stackroute.umove.bookingservice.exception.RideNotFoundException;
import in.stackroute.umove.bookingservice.model.*;
import in.stackroute.umove.bookingservice.service.RideService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.bson.types.ObjectId;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("api/v1")
public class RideController {

    private static final Logger logger = LogManager.getLogger(RideController.class);

    private final SimpMessagingTemplate template;
    private final RabbitTemplate messagingTemplate;

    @Autowired
    RideController(SimpMessagingTemplate template, RabbitTemplate messagingTemplate) {
        this.template = template;
        this.messagingTemplate = messagingTemplate;
    }

    @Autowired
    private RideService rideService;

    //Api end point for posting ride details
    @PostMapping("rides")
    public ResponseEntity<Map> confirmBooking(@RequestBody() Ride ride) {
//        logger.debug("Hello from Log4j 2 ");
        Ride currentRide = rideService.getRideByUserIdNStatus(ride.getRider().get_id(), "Confirmed");
        if(currentRide != null)  {
            throw new RideAlreadyBookedException("Ride", "userId", ride.getRider().get_id());
        }
//        if(bookingServiceInterface.)
        // if vehicle is allocated and outstanding amount is checked and there is no pending outstanding amount then set status as confirmed
//        ride.setRideId(new UUID);
        ride.setStatus(RideStatus.Confirmed);
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
        logger.debug("Extracharge" + extraCharges + " | ride id " + rideId);
        Ride ride = rideService.addExtraCharges(rideId, extraCharges);
        Map<String, Object> payload = new LinkedHashMap<>();
        payload.put("status", "Ended");
        payload.put("message", "Rided is ended.");
        this.template.convertAndSend("/topic/end-ride/" + rideId, payload);
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

    @DeleteMapping("rides")
    public ResponseEntity<Map> deleteAllRides() {
        rideService.deleteAll();
        Map<String, Object> map = new TreeMap<>();
        map.put("message", "All rides are deleted successfully.");
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }
    // End Point: api/v1/payments Method: PUT
    // to pay for a specific ride by id
    @PutMapping("rides/payments")
    public ResponseEntity<Map> payForBooking(@RequestParam(value = "rideId") ObjectId rideId, @RequestParam(value = "paymentId") String paymentId, @RequestParam(value="paymentStatus") String paymentStatus) {
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
        Payment payment = rideService.getPaymentDetails(rideId);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", payment);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }



}

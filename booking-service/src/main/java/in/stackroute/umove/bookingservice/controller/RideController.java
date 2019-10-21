package in.stackroute.umove.bookingservice.controller;

import in.stackroute.umove.bookingservice.exception.RideAlreadyBookedException;
import in.stackroute.umove.bookingservice.exception.RideNotFoundException;
import in.stackroute.umove.bookingservice.model.*;
import in.stackroute.umove.bookingservice.service.RideService;
import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.service.RideServiceImp;
import org.bson.types.ObjectId;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.core.RabbitMessagingTemplate;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@RestController
@RequestMapping("api/v1")
public class RideController {

    private final SimpMessagingTemplate template;
    private final RabbitTemplate messagingTemplate;

    @Autowired
    RideController(SimpMessagingTemplate template, RabbitTemplate messagingTemplate) {
        this.template = template;
        this.messagingTemplate = messagingTemplate;
    }

    @Autowired
    private RideService rideService;

    // End Point: api/v1/rides Method: POST
    // to confirm booking for a ride
    //Create rides
    @PostMapping("rides")
    public ResponseEntity<Map> confirmBooking(@RequestBody() Ride ride) {
        Map<String, Object> map = new TreeMap<>();
        Ride currentRide = rideService.getRideByUserIdNStatus(ride.getRider().get_id(), "Confirmed");
        if(currentRide != null)  {
            throw new RideAlreadyBookedException("Ride", "userId", ride.getRider().get_id());
        }

        Payment outstandingPayment = rideService.getOutstandingRideDetail(ride.getRider().get_id());
        if(outstandingPayment != null) {
            map.put("status", "Failed");
            map.put("data", outstandingPayment);
            map.put("message", "There is some outstanding amount pending. Pay that First to make a new Booking.");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }

        // check for vehicle allocation

        // check for user status

        ride.setStatus(RideStatus.Confirmed);
        ride.setBookedAt(LocalDateTime.now());
        Ride rideDetails = rideService.confirmRide(ride);
        map.put("data", rideDetails);
        map.put("status", HttpStatus.CREATED);
        messagingTemplate.convertAndSend("booking_exchange", "ride_confirmed", map);
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
        Ride ride = rideService.addExtraCharges(rideId, extraCharges);
        Map<String, Object> payload = new LinkedHashMap<>();
        payload.put("status", "Ended");
        payload.put("message", "Rided is ended.");
        this.template.convertAndSend("/topic/end-ride/" + rideId, payload);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        messagingTemplate.convertAndSend("booking_exchange", "ride_ended", map);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    //Api end point for start ride request by the user
    @PatchMapping("rides/{rideId}/start")
    public ResponseEntity<Map> startRideRequest(@PathVariable("rideId") ObjectId rideId, @RequestParam(value = "vehicleNumber", required = true) String registrationNo) {
        Ride ride = rideService.startRide(rideId, registrationNo);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        map.put("status", HttpStatus.OK);
        template.convertAndSend("/topic/ride-started/" + registrationNo, map);
        messagingTemplate.convertAndSend("booking_exchange", "ride_started", map);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    //Api end point for autocancel ride request by the user
    @PatchMapping("rides/{rideId}/autocancel")
    public ResponseEntity<Map> autocancelRide(@PathVariable("rideId") ObjectId rideId) {
        Ride ride = rideService.autocancelRide(rideId);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        map.put("status", HttpStatus.OK);
        messagingTemplate.convertAndSend("booking_exchange", "ride_cancelled", map);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    //Api end point for cancel ride request by the user
    @PatchMapping("rides/{rideId}/cancel")
    public ResponseEntity<Map> cancelRideRequest(@PathVariable("rideId") ObjectId rideId) {
        Ride ride = rideService.cancelRide(rideId);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", ride);
        map.put("status", HttpStatus.OK);
        messagingTemplate.convertAndSend("booking_exchange", "ride_cancelled", map);
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

//    //Api end point for end ride request by the user
//    @PatchMapping("rides/{rideId}/end")
//    public ResponseEntity<Map> endRideRequest(@PathVariable("rideId") ObjectId rideId) {
//        Ride ride = rideService.endRideRequest(rideId);
//        Map<String, Object> map = new TreeMap<>();
//        map.put("data", ride);
//        map.put("status", HttpStatus.OK);
//        return new ResponseEntity<>(map, HttpStatus.OK);
//    }
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
    @PutMapping("payments")
    public ResponseEntity<Map> payForBooking(@RequestParam(value = "rideId") ObjectId rideId, @RequestParam(value = "payment_Id") String paymentId) {
        Payment payment = rideService.payForRide(rideId, paymentId);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", payment);
        map.put("status", HttpStatus.CREATED);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    // End Point: api/v1/payments/rideId Method: GET
    // to get payment Details for a specific ride by rideId
    @GetMapping("payments/{rideId}")
    public ResponseEntity<Map> getPaymentDetails(@PathVariable("rideId") String rideId)
    {
        Payment payment = rideService.getPaymentDetails(rideId);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", payment);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }



}

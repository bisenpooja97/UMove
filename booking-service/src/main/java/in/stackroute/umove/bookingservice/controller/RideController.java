package in.stackroute.umove.bookingservice.controller;

import in.stackroute.umove.bookingservice.model.*;
import in.stackroute.umove.bookingservice.service.RideService;
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
    @Autowired
    RideService rideService;

    private final SimpMessagingTemplate template;
    private final RabbitTemplate messagingTemplate;

    @Autowired
    public RideController(SimpMessagingTemplate template, RabbitTemplate messagingTemplate) {
        this.template = template;
        this.messagingTemplate = messagingTemplate;
    }

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

    // End Point: api/v1/rides/{rideId}/extra-charges
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

    //End Point: api/v1/rides/track-ride
    //to get tracking data for all rides
    @GetMapping("rides/track-ride")
    public ResponseEntity<Map> getAllTrackingInformation()
    {
        Map<String, Object> map = new TreeMap<>();
        map.put("data", rideService.getAllTrackingData());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    //update latitude and longitude
    @PatchMapping("rides/track-ride/{rideId}")
    public ResponseEntity<?> updateTrackingInformation(@PathVariable("rideId")String rideId, @RequestParam(value="latitude") String latitude, @RequestParam(value="longitude") String longitude)
    {
        Map<String, Object> map = new TreeMap<>();
        map.put("data", rideService.updateTrackingData(rideId, latitude, longitude));
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}

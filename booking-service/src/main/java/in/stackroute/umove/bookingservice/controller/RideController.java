package in.stackroute.umove.bookingservice.controller;

import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.model.RideStatus;
import in.stackroute.umove.bookingservice.model.Zone;
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

/*
 *  Controller for dealing with ride
 */

@RestController
@CrossOrigin("${umove.rider-ui.host}")
@RequestMapping(value = "api/v1")
public class RideController {

    @Autowired
    private RideService rideService;

    //Api end point for posting ride details
    @PostMapping("rides")
    public ResponseEntity<Map> confirmRide(@RequestBody() Ride ride) {
        ride.setStatus(RideStatus.Confirmed);
        ride.setBookedAt(LocalDateTime.now());
        Ride rideDetails = rideService.confirmRide(ride);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", rideDetails);
        map.put("status", HttpStatus.CREATED);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    //Api end point for getting all ride details or getting ride details by the userId and rideStatus
    @GetMapping("rides")
    public ResponseEntity<Map> getRideByUserIdNStatus(@RequestParam(value = "userId", required = false) String userId, @RequestParam(value = "rideStatus", required = false) String rideStatus) {
        if(userId!= null && rideStatus!= null) {
            Ride ride = rideService.getRideByUserIdNStatus(userId, rideStatus);
            Map<String, Object> map = new TreeMap<>();
            map.put("data", ride);
            map.put("status", HttpStatus.OK);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        List<Ride> rides = rideService.getAllRides();
        Map<String, Object> map = new TreeMap<>();
        map.put("data", rides);
        map.put("count", rides.size());
        map.put("status", HttpStatus.OK);
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

}

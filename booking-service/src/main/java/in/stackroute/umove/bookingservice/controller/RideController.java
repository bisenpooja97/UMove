package in.stackroute.umove.bookingservice.controller;

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
@RequestMapping(value = "api/v1")
public class RideController
{
   @Autowired
   RideService rideService;

   // End Point: api/v1/rides Method: GET
   // to get all the rides list
   // End Point: api/v1/rides?userId Method: GET
   // to get all the rides list for a particular user
   // Retrieve
   @GetMapping("rides")
   public ResponseEntity<Map> getRides(@RequestParam(value = "userId", required = false) String userId) {
      List<Ride> rides;
      if(userId!= null && !userId.isEmpty())
      {
         rides = rideService.getRidesByUserId(userId);
      }
      else
      {
         rides = rideService.getAllRides();
      }
      Map<String, Object> map = new TreeMap<>();
      map.put("data", rides);
      map.put("count", rides.size());
      map.put("status", HttpStatus.OK);
      return new ResponseEntity<Map>(map, HttpStatus.OK);
   }

   // End Point: api/v1/rides/{ridesId} Method: GET
   // to get a specific rides details by ridesId
   @GetMapping("rides/{ridesId}")
   public ResponseEntity<Map> getRidesById(@PathVariable("ridesId") ObjectId id) {
      Ride rides = rideService.getRidesById(id);
      Map<String, Object> map = new TreeMap<>();
      map.put("data", rides);
      map.put("status", HttpStatus.OK);
      return new ResponseEntity<Map>(map, HttpStatus.OK);
   }

   // End Point: api/v1/rides Method: POST
   // to confirm booking for a ride
   //Create rides
   @PostMapping("rides")
   public ResponseEntity<Map> confirmRide(@RequestBody() Ride ride) {
      // if vehicle is allocated and outstanding amount is checked and there is no pending outstanding amount then set status as confirmed
      ride.setStatus("Confirmed");
      ride.setBookedAt(LocalDateTime.now());
      Ride rideDetails = rideService.confirmRide(ride);
      Map<String, Object> map = new TreeMap<>();
      map.put("data", rideDetails);
      map.put("status", HttpStatus.CREATED);
      return new ResponseEntity<>(map, HttpStatus.CREATED);
   }
}

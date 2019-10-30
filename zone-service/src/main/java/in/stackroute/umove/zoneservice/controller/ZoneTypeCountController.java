package in.stackroute.umove.zoneservice.controller;

import in.stackroute.umove.zoneservice.model.ZoneTypeCount;
import in.stackroute.umove.zoneservice.service.ServiceZoneTypeCount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

// @CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("api/v1")
public class ZoneTypeCountController {

    @Autowired
    private ServiceZoneTypeCount serviceZoneTypeCount;

    // Zone creation API
    @PostMapping("/zoneTypeCount")
    public ResponseEntity<Map> create(@RequestBody() ZoneTypeCount zoneTypeCount){
        ZoneTypeCount zoneData = serviceZoneTypeCount.create(zoneTypeCount);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", zoneData);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping("/zoneTypeCount/total")
    public ResponseEntity<Map> findZoneTypeCount() {
        List<ZoneTypeCount> zoneTypeCounts =serviceZoneTypeCount.findAllTypeCount();
        Map<String, Object> map = new TreeMap<>();
        map.put("data", zoneTypeCounts);
        map.put("count", zoneTypeCounts.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    // Searching of zone by name API
    @GetMapping("/zoneTypeCount")
    public ResponseEntity<Map> findZoneType(@RequestParam(value = "zoneId") String zoneId,
                                            @RequestParam(value = "typeId") String typeId) {
        ZoneTypeCount zoneList = serviceZoneTypeCount.getZoneType(zoneId, typeId);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", zoneList);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    @PatchMapping("/zoneTypeCount")
    public ResponseEntity<Map> updateZoneDetails(@RequestParam(value = "zoneId") String zoneId,
                                                 @RequestParam(value = "typeId") String typeId,
                                                 @RequestBody ZoneTypeCount zone) {
        ZoneTypeCount zone1 = serviceZoneTypeCount.updateCount(zoneId, typeId, zone);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", zone1);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    @PatchMapping("/bookingConfirmed")
    public ResponseEntity<Map> ConfirmBooking(@RequestParam(value = "zoneId") String zoneId,
                                              @RequestParam(value = "typeId") String typeId) {
        ZoneTypeCount typeList = serviceZoneTypeCount.bookingConfirmed(zoneId, typeId);
        if(typeList == null) {
            Map<String, Object> map = new TreeMap<>();
            map.put("message", "No type available!!!");
            map.put("status", "Failed");
            return new ResponseEntity<Map>(map, HttpStatus.OK);
        } else {
            Map<String, Object> map = new TreeMap<>();
            map.put("data", typeList);
            map.put("message", "Booking confirmed!!!");
            map.put("status", "Booked");
            return new ResponseEntity<Map>(map, HttpStatus.OK);
        }
    }
    

}

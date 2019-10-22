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

@CrossOrigin(origins = {"http://localhost:4200"})
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



}

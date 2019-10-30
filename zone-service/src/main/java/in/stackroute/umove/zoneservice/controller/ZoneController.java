/**
 *  Zone Controller Class
 */

// Package
package in.stackroute.umove.zoneservice.controller;

// Importing files
import in.stackroute.umove.zoneservice.model.Zone;
//import in.stackroute.umove.zoneservice.model.Vehicle;
import in.stackroute.umove.zoneservice.model.ZoneStatus;
//import in.stackroute.umove.zoneservice.service.impl.ServiceVehicleImpl;
import in.stackroute.umove.zoneservice.service.impl.ServiceZoneImpl;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

//@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("api/v1")
public class ZoneController {

    private static final Logger logger = LogManager.getLogger(FuelController.class);

    @Autowired
    private ServiceZoneImpl serviceZoneDummy;

    @Autowired
    private RestTemplate restTemplate;

    // Zone creation API
    @PostMapping("/zones")
    public ResponseEntity<Map> addNewZone(@RequestBody() Zone zone){
        Zone zoneData = serviceZoneDummy.addNewZone(zone);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", zoneData);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    // Getting list of all zones API
    @GetMapping("/zones")
    public ResponseEntity<Map> getAllZones( @RequestParam(value = "page", required = false) Integer page) {
        List<Zone> zoneList = serviceZoneDummy.findAllZones((page !=null) ? page : 0 );
        Map<String, Object> map = new TreeMap<>();
        map.put("data", zoneList);
        map.put("count", zoneList.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    // Searching of zone by name API
    @GetMapping("/zones/name/{name}")
    public ResponseEntity<Map> findByName(@PathVariable String name) {
        List<Zone> zoneList = serviceZoneDummy.findByZoneName(name);
        Map<String, Object> map = new TreeMap<>();
        map.put("count", zoneList.size());
        map.put("data", zoneList);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    // Searching of zone by locality API
    @GetMapping("/zones/locality/{locality}")
    public ResponseEntity<Map> findZonesByLocality(@PathVariable String locality, @RequestParam(value = "page", required = false) Integer page) {
        List<Zone> zoneList = serviceZoneDummy.findZonesByLocality(locality, (page !=null) ? page : 0 );
        Map<String, Object> map = new TreeMap<>();
        map.put("count", zoneList.size());
        map.put("data", zoneList);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    // Updating of zones according to zone name API
    @PatchMapping("/zones/{name}")
    public ResponseEntity<Map> updateZoneDetails(@PathVariable String name, @RequestBody Zone zone) {
        Zone zone1 = serviceZoneDummy.updateZoneDetails(name, zone);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", zone1);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }



    // Showing 3 nearby zones API
    @GetMapping("/zones/nearby")
    public ResponseEntity<Map> nearbyZones(@RequestParam("lon") Double lon, @RequestParam("lat") Double lat){
        List<Zone> zones=serviceZoneDummy.getNearbyZones(lon,lat);
        Map<String, Object> map = new TreeMap<>();
        map.put("count", zones.size());
        map.put("data", zones);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

/*
    @GetMapping("/zones/{supervisorId}")
    public ResponseEntity<Map> getVehiclesBySupervisorId(@PathVariable String supervisorId){
        Zone zone = serviceZoneDummy.findZoneBySupervisorId(supervisorId);
        List<Vehicle> vehicleList = serviceVehicle.findByZone(zone.getId());
        Map<String, Object> map = new TreeMap<>();
        map.put("data", vehicleList);
        map.put("count", vehicleList.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);

    }
    */

    @GetMapping("/zones/loc/{locality}")
    public ResponseEntity<Map> getLocality(@PathVariable String locality) {
        String serviceURL = "https://api.tomtom.com/search/2/structuredGeocode.json?countryCode=IND&limit=1&" +
                "streetName="+locality+"&municipality=Bengaluru&key=Q0lrXtgq4yAgXdZuyf7RBbItuzVuRxUj";
        Object loc = restTemplate.getForObject(serviceURL, Object.class);

        //results d = loc
        Map<String, Object> map = new TreeMap<>();
        map.put("data", loc);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    @GetMapping("/zones/status/{status}")
    public ResponseEntity<Map> getZonesByStatus(@PathVariable ZoneStatus status, @RequestParam(value = "page", required = false) Integer page) {
        List<Zone> zones=serviceZoneDummy.findByStatus(status, (page !=null) ? page : 0 );
        Map<String, Object> map = new TreeMap<>();
        map.put("data", zones);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }


}

package in.stackroute.umove.vehicleservice.controller;


import in.stackroute.umove.vehicleservice.model.Vehicle;
import in.stackroute.umove.vehicleservice.model.VehicleStatus;
import in.stackroute.umove.vehicleservice.service.ServiceVehicle;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8100",  "http://localhost:8000"})
@RestController
@RequestMapping("/api/v1")
public class VehicleController {
    private static final Logger logger = LogManager.getLogger(VehicleController.class);
    @Autowired
    private ServiceVehicle vehicleManagementService;

    // function to add new vehicles
    @PostMapping("/vehicles")
    public ResponseEntity<Map> addVehicle(@RequestBody Vehicle vehicle) {

        Vehicle vehicleList = vehicleManagementService.addVehicle(vehicle);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", vehicleList);
        map.put("status", HttpStatus.CREATED);


        return new ResponseEntity<>(map, HttpStatus.CREATED);

    }


    // function to get details of all vehicles
    @GetMapping("/vehicles")
    public ResponseEntity<Map> getVehicle(@RequestParam(value = "zoneId", required = false) String zoneId,
                                          @RequestParam(value = "type", required = false) String type,
                                          @RequestParam(value = "registrationNo", required = false) String registrationNo,
                                          @RequestParam(value = "status", required = false) VehicleStatus status,
                                          @RequestParam(value = "page", required = false) Integer page) {

        if (zoneId != null && type != null && !zoneId.isEmpty() && !type.isEmpty()) {
            List<Vehicle> vehicleList = vehicleManagementService.findByZoneAndType(zoneId,type,(page !=null) ? page : 0 );
            Map<String, Object> map = new TreeMap<>();
            map.put("data", vehicleList);
            map.put("count",vehicleList.size());
            map.put("status", HttpStatus.OK);
            return new ResponseEntity<Map>(map, HttpStatus.OK);

        }

        if (zoneId != null && !zoneId.isEmpty()) {
            List<Vehicle> vehicleList = vehicleManagementService.findByZone(zoneId,(page !=null) ? page : 0 );
            Map<String, Object> map = new TreeMap<>();
            map.put("data", vehicleList);
            map.put("status", HttpStatus.OK);
            return new ResponseEntity<Map>(map, HttpStatus.OK);
        }

        if (type != null && !type.isEmpty()) {
            List<Vehicle> vehicleList = vehicleManagementService.findByType(type,(page !=null) ? page : 0);
            Map<String, Object> map = new TreeMap<>();
            map.put("data", vehicleList);
            map.put("status", HttpStatus.OK);
            return new ResponseEntity<Map>(map, HttpStatus.OK);
        }

        if (registrationNo != null && !registrationNo.isEmpty()) {
            //return new ResponseEntity(vehicleManagementService.findByRegistrationNo(registrationNo),HttpStatus.OK);
            Vehicle vehicle = vehicleManagementService.findByRegistrationNo(registrationNo);
            Map<String, Object> map = new TreeMap<>();
            map.put("data", vehicle);
            map.put("status", HttpStatus.OK);
            return new ResponseEntity<Map>(map, HttpStatus.OK);
        }


        if (status != null) {
            List<Vehicle> vehicleList = vehicleManagementService.findByStatus(status,(page !=null) ? page : 0);
            Map<String, Object> map = new TreeMap<>();
            map.put("data", vehicleList);
            map.put("status", HttpStatus.OK);
            return new ResponseEntity<Map>(map, HttpStatus.OK);


        }
        List<Vehicle> vehicleList = vehicleManagementService.find((page !=null) ? page : 0);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", vehicleList);
        map.put("count", vehicleList.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }


    // To update vehicles details based on registration no
    @PatchMapping("/vehicles/{registrationNo}")
    public ResponseEntity<Map> updateVehicleDetails(@PathVariable String registrationNo, @RequestBody Vehicle vehicle) {
        Vehicle vehicle1 = vehicleManagementService.updateVehicleDetails(registrationNo, vehicle);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", vehicle1);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }
}






    // To fetch details of vehicles based on type

//    @GetMapping("vehicles/types/{vtype}")
//    public ResponseEntity<Map> getVehiclebyname(@PathVariable("vtype") String vtype){
//        List<Vehicle> vehicleList = vehicleManagementService.findByType(vtype);
//        Map<String, Object> map = new TreeMap<>();
//        map.put("count", vehicleList.size());
//        map.put("data", vehicleList);
//        map.put("status", HttpStatus.OK);
//        return new ResponseEntity<Map>(map, HttpStatus.OK);
//    }


    //To fetch details of vehicle based on registration No
//    @GetMapping("/vehicles/register/{registrationNo}")
//    public ResponseEntity<Map> VehicleDetails(@PathVariable String registrationNo) {
//        Vehicle v= vehicleManagementService.findByRegistrationNo(registrationNo);
//        Map<String, Object> map = new TreeMap<>();
//        map.put("data", v);
//        map.put("status", HttpStatus.OK);
//        return new ResponseEntity<Map>(map, HttpStatus.OK);
//    }

    //To fetch details based on the status of vehicle

//    @GetMapping("/vehicles/status/{status}")
//    public ResponseEntity<Map> VehicleDetailsByStatus(@PathVariable Status status){
//        List<Vehicle> vehicle = vehicleManagementService.findByStatus(status);
//        Map<String , Object> map = new TreeMap<>();
//        map.put("data", vehicle);
//        map.put("status", HttpStatus.OK);
//        return  new ResponseEntity<Map>(map,HttpStatus.OK);
//    }

    // Function to fetch details based of vehicles based on zone id
//    @GetMapping("zones/vehicles/{zone_id}")
//    public ResponseEntity<Map> getVehicleByZoneId(@PathVariable("zone_id") String zone_id){
//        List<Vehicle> vehicleList = vehicleManagementService.findByZone(zone_id);
//        Map<String, Object> map = new TreeMap<>();
//        map.put("data", vehicleList);
//        map.put("count", vehicleList.size());
//        map.put("status", HttpStatus.OK);
//        return new ResponseEntity<Map>(map, HttpStatus.OK);
//    }











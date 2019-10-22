package in.stackroute.umove.zoneservice.controller;

import in.stackroute.umove.zoneservice.model.Fuel;
import in.stackroute.umove.zoneservice.service.ServiceFuel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

//@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8100",  "http://localhost:8000"})
@RestController
@RequestMapping("/api/v1")
public class FuelController {

    @Autowired
    private ServiceFuel serviceFuel;

    @PostMapping("/fuel")
    public ResponseEntity<Map> addFuel(@RequestBody Fuel fuel) {
        Fuel fuelList = serviceFuel.addFuel(fuel);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", fuelList);
        map.put("status", HttpStatus.CREATED);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }


    @GetMapping("/fuel")
    public ResponseEntity<Map> getFuel(@RequestParam(value = "name", required = false) String name
    ) {

        if (name != null && !name.isEmpty()) {
            Fuel fuelList = serviceFuel.findName(name);
            Map<String, Object> map = new TreeMap<>();
            map.put("data", fuelList);
            map.put("status", HttpStatus.OK);
            return new ResponseEntity<Map>(map, HttpStatus.OK);
        }

        List<Fuel> fuelList = serviceFuel.find();
        Map<String, Object> map = new TreeMap<>();
        map.put("data", fuelList);
        map.put("count", fuelList.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    @PatchMapping("/fuel/{name}")
    public ResponseEntity<Map> updateFuelDetails(@PathVariable String name, @RequestBody Fuel fuel) {
        Fuel fuel1 = serviceFuel.updateFuelDetails(name, fuel);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", fuel1);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

}

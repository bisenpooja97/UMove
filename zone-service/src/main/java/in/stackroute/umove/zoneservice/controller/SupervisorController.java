package in.stackroute.umove.zoneservice.controller;

import in.stackroute.umove.zoneservice.model.Supervisor;
import in.stackroute.umove.zoneservice.model.SupervisorStatus;
import in.stackroute.umove.zoneservice.service.impl.ServiceSupervisorImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.TreeMap;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping("api/v1")
public class SupervisorController {

    @Autowired
    private ServiceSupervisorImpl serviceSupervisor;

    // Zone creation API
    @PostMapping("/supervisor")
    public ResponseEntity<Map> addNewSupervisor(@RequestBody()Supervisor supervisor){
        Supervisor supervisor1 = serviceSupervisor.addNewSupervisor(supervisor);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", supervisor1);
        map.put("status", HttpStatus.CREATED);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    // Getting list of all zones API
    @GetMapping("/supervisor")
    public ResponseEntity<Map> getAllSupervisor() {
        List<Supervisor> supervisorList = serviceSupervisor.findAllSupervisor();
        Map<String, Object> map = new TreeMap<>();
        map.put("data", supervisorList);
        map.put("count", supervisorList.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    @GetMapping("/supervisor/status/{status}")
    public ResponseEntity<Map> getSupervisorByStatus(@PathVariable SupervisorStatus status) {

        List<Supervisor> supervisorList = serviceSupervisor.findByStatus(status);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", supervisorList);
        map.put("count", supervisorList.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);

    }

    @GetMapping("/supervisor/{id}")
    public ResponseEntity<Map> getSupervisorById(@PathVariable String id) {
        Optional<Supervisor> supervisor = serviceSupervisor.findByID(id);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", supervisor);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    // Updating of zones according to zone name API
    @PatchMapping("/supervisor/{sid}")
    public ResponseEntity<Map> updateSupervisorStatus(@PathVariable String id, @RequestBody Supervisor supervisor) {
        Supervisor supervisor1 = serviceSupervisor.updateSupervisorStatus(id, supervisor);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", supervisor1);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }
}

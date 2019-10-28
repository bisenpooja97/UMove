package in.stackroute.umove.bookingservice.controller;

import in.stackroute.umove.bookingservice.exception.ConfigurationAlreadyExistsException;
import in.stackroute.umove.bookingservice.exception.ConfigurationNotFoundException;
import in.stackroute.umove.bookingservice.model.Configuration;
import in.stackroute.umove.bookingservice.repo.ConfigRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@RestController
@CrossOrigin("${umove.rider-ui.host}")
@RequestMapping(value = "api/v1")
public class ConfigurationController {

    @Autowired
    private ConfigRepo configRepo;

    @GetMapping("config")
    public ResponseEntity<Map> getAllConfigurations() {
        List<Configuration> configs = configRepo.findAll();
        Map<String, Object> map = new TreeMap<>();
        map.put("data", configs);
        map.put("count", configs.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping("config/{name}")
    public ResponseEntity<Map> getConfigurationByName(@PathVariable("name") String name) {
        Configuration config = configRepo.findByName(name);
        if(config == null) {
            throw new ConfigurationNotFoundException("Configuration", "name", name);
        }
        Map<String, Object> map = new TreeMap<>();
        map.put("data", config);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PostMapping("config")
    public ResponseEntity<Map> createConfiguration(@RequestBody Configuration config) {
        if(configRepo.findByName(config.getName()) != null) {
            throw new ConfigurationAlreadyExistsException("Configuration", "name", config.getName());
        }
        configRepo.save(config);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", config);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @DeleteMapping("config/{name}")
    public ResponseEntity<Map> deleteConfiguration(@PathVariable("name") String name) {
        configRepo.delete(configRepo.findByName(name));
        Map<String, Object> map = new TreeMap<>();
        map.put("message", "Configuration is deleted successfully.");
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PatchMapping("config/{name}")
    public ResponseEntity<Map> updateConfiguration(@PathVariable("name") String name, @RequestParam(value = "configValue", required = true) int value) {
        Configuration config = configRepo.findByName(name);
        if(config == null) {
            throw new ConfigurationNotFoundException("Configuration", "name", name);
        }
        config.setValue(value);
        configRepo.save(config);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", config);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }


}

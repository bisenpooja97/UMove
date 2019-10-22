package in.stackroute.umove.bookingservice.controller;

import in.stackroute.umove.bookingservice.dao.ConfigurationDao;
import in.stackroute.umove.bookingservice.model.Configuration;
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
    private ConfigurationDao configurationDao;

    @GetMapping("config")
    public ResponseEntity<Map> getAllConfigurations() {
        List<Configuration> configs = configurationDao.findAll();
        Map<String, Object> map = new TreeMap<>();
        map.put("data", configs);
        map.put("count", configs.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping("config/{name}")
    public ResponseEntity<Map> getConfigurationByName(@PathVariable("name") String name) {
        Configuration config = configurationDao.findByName(name);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", config);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PostMapping("config")
    public ResponseEntity<Map> createConfiguration(@RequestBody Configuration config) {
        if(configurationDao.findByName(config.getName()) != null) {
            return null;
        }
        configurationDao.save(config);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", config);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @DeleteMapping("config/{name}")
    public ResponseEntity<Map> deleteConfiguration(@PathVariable("name") String name) {
        configurationDao.delete(configurationDao.findByName(name));
        Map<String, Object> map = new TreeMap<>();
        map.put("message", "Configuration is deleted successfully.");
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PatchMapping("config/{name}")
    public ResponseEntity<Map> updateConfiguration(@PathVariable("name") String name, @RequestParam(value = "value", required = true) int value) {
        Configuration config = configurationDao.findByName(name);
        config.setValue(value);
        configurationDao.save(config);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", config);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}

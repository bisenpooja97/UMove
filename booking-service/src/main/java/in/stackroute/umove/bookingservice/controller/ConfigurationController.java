package in.stackroute.umove.bookingservice.controller;

import in.stackroute.umove.bookingservice.dao.ConfigurationDao;
import in.stackroute.umove.bookingservice.model.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("${umove.rider-ui.host}")
@RequestMapping(value = "api/v1")
public class ConfigurationController {

    @Autowired
    private ConfigurationDao configurationDao;

    @GetMapping("config")
    public List<Configuration> getAllConfigurations() {
        return configurationDao.findAll();
    }

    @GetMapping("config/{name}")
    public Configuration getConfigurationByName(@PathVariable("name") String name) {
        return configurationDao.findByName(name);
    }

    @PostMapping("config")
    public Configuration createConfiguration(@RequestBody Configuration config) {
        configurationDao.save(config);
        return config;
    }

    @DeleteMapping("config/{name}")
    public void deleteConfiguration(@PathVariable("name") String name) {
        configurationDao.delete(configurationDao.findByName(name));
    }

    @PatchMapping("config/{name}")
    public void updateConfiguration(@PathVariable("name") String name, @RequestParam(value = "value", required = true) int value) {
        Configuration config = configurationDao.findByName(name);
        config.setValue(value);
        configurationDao.save(config);
    }

}

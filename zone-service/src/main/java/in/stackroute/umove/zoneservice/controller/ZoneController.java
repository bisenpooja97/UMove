package in.stackroute.umove.zoneservice.controller;

import in.stackroute.umove.zoneservice.model.Zones;
import in.stackroute.umove.zoneservice.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class ZoneController {

    @Autowired
    private Service service;

    @GetMapping("zones")
    ResponseEntity<List> getNearbyZones(@RequestParam("lon") Double lon, @RequestParam("lat") Double lat){
        List<Zones> zones=service.getNearbyZones(lon,lat);
        return new ResponseEntity<>(zones, HttpStatus.CREATED);
    }
}

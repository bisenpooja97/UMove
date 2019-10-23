package in.stackroute.umove.vehicleservice.controller;

import in.stackroute.umove.vehicleservice.model.Type;
import in.stackroute.umove.vehicleservice.service.ServiceType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class TypeController {
    private ServiceType typeManagementService;

    @PostMapping("/type")
    public void add(@RequestBody Type type) {
        typeManagementService.addType(type);



    }
}

package in.stackroute.umove.vehicleservice.controller;

import in.stackroute.umove.vehicleservice.model.VehicleType;
import in.stackroute.umove.vehicleservice.repository.VehicleTypeRepo;
import in.stackroute.umove.vehicleservice.service.ServiceVehicleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8100", "http://localhost:8000"})
@RestController
@RequestMapping("/api/v1")
public class VehicleTypeController {
    @Autowired

    private ServiceVehicleType typeManagementService;
    VehicleTypeRepo repo;

    // To add new type
    @PostMapping("/types")
    public ResponseEntity<Map> addType(@RequestBody VehicleType type) {
        VehicleType typeList = typeManagementService.addType(type);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", typeList);
        map.put("status", HttpStatus.CREATED);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }


    //To fetch data of all types

    @GetMapping("/types")
    public ResponseEntity<Map> getType(@RequestParam(value = "name", required = false) String name,
                                       @RequestParam(value = "id", required = false) String id) {

        if (name != null && !name.isEmpty()) {
            List<VehicleType> typeList = typeManagementService.findName(name);
            Map<String, Object> map = new TreeMap<>();
            map.put("count", typeList.size());
            map.put("data", typeList);
            map.put("status", HttpStatus.OK);
            return new ResponseEntity<Map>(map, HttpStatus.OK);
        }

        List<VehicleType> typeList = typeManagementService.find();
        Map<String, Object> map = new TreeMap<>();
        map.put("data", typeList);
        map.put("count", typeList.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }


    // To update the type values
    @PatchMapping("/types/{name}")
    public ResponseEntity<Map> updateTypeDetails(@PathVariable String name, @RequestBody VehicleType type) {
        VehicleType type1 = typeManagementService.updateTypeDetails(name, type);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", type1);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }


    // Function to save image in local sysytem
    @PostMapping("/vehicletypes/uploadImage")
    public String uploadImage(@RequestParam(name = "imageFile", required = true) MultipartFile imageFile,
                              @RequestParam(name = "uid", required = true) String uid) {
        String returnValue = "start";
        try {
            typeManagementService.saveImage(imageFile, uid);
        } catch (Exception e) {
            e.printStackTrace();
            returnValue = "Error";
        }
        return returnValue;
    }

     //To fetch type data based on id

    @GetMapping("/types/{id}")
    public ResponseEntity<Map> getTypeById(@PathVariable("typeId") String id) {
        VehicleType typeList=typeManagementService.findByVid(id);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", typeList);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }
}







package in.stackroute.umove.vehicleservice.controller;

import in.stackroute.umove.vehicleservice.model.UploadFileResponse;
import in.stackroute.umove.vehicleservice.model.VehicleType;
import in.stackroute.umove.vehicleservice.repository.VehicleTypeRepo;
import in.stackroute.umove.vehicleservice.service.ServiceVehicleType;
import in.stackroute.umove.vehicleservice.service.impl.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8100", "http://localhost:8000"})
@RestController
@RequestMapping("/api/v1")
public class VehicleTypeController {
    @Autowired
    private FileStorageService fileStorageService;
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
                                       @RequestParam(value = "id", required = false) String id,@RequestParam(value = "fuel", required = false) String fuel) {

        if (name != null && !name.isEmpty()) {
            VehicleType typeList = typeManagementService.findName(name);
            Map<String, Object> map = new TreeMap<>();
            map.put("data", typeList);
            map.put("status", HttpStatus.OK);
            return new ResponseEntity<Map>(map, HttpStatus.OK);
        }

        if(fuel!= null && !fuel.isEmpty()) {
            List<VehicleType> vehicleType = typeManagementService.findVehicleTypeByFuel(fuel);
            Map<String, Object> map = new TreeMap<>();
            map.put("data", vehicleType);
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
    @PostMapping("/uploadFile")
    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file,@RequestParam(name="id",required = true)String id) {
        String fileName = fileStorageService.storeFile(file,id);
        String fileDownloadUri =
                ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName)
                .toUriString();
        return new UploadFileResponse(fileName, fileDownloadUri,
                file.getContentType(), file.getSize());
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







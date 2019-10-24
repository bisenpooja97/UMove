package in.stackroute.umove.vehicleservice.controller;

import in.stackroute.umove.vehicleservice.model.UploadFileResponse;
import in.stackroute.umove.vehicleservice.model.VehicleType;
import in.stackroute.umove.vehicleservice.repository.VehicleTypeRepo;
import in.stackroute.umove.vehicleservice.service.ServiceVehicleType;
import in.stackroute.umove.vehicleservice.service.impl.FileStorageService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8100", "http://localhost:8000"})
@RestController
@RequestMapping("/api/v1")
public class VehicleTypeController {
    private static final Logger logger = LogManager.getLogger(VehicleTypeController.class);
    @Autowired
    private FileStorageService fileStorageService;
    @Autowired

    private ServiceVehicleType typeManagementService;
    VehicleTypeRepo repo;

    // To add new type
    @PostMapping("/types")
    public ResponseEntity<Map> addType(@RequestBody VehicleType type) {
        logger.debug("Hello from Log4j 2 ");


        VehicleType typeList = typeManagementService.addType(type);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", typeList);
        map.put("status", HttpStatus.CREATED);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }


    //To fetch data of all types

    @GetMapping("/types")
    public ResponseEntity<Map> getType(@RequestParam(value = "name", required = false) String name,
                                       @RequestParam(value = "id", required = false) String id,@RequestParam(value = "fuel", required = false) String fuel
                                        ,@RequestParam(value = "page", required = false) Integer page) {

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

        List<VehicleType> typeList = typeManagementService.find((page !=null) ? page : 0 );
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
                .path("api/v1/downloadFile/")
                .path(fileName)
                .toUriString();
        String fileDownloaduri= ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("api/v1/downloadFile/"+fileName).toUriString();
  //     VehicleType vehicleType=typeManagementService.findName(id);
  //     vehicleType.getUrl();
  //     vehicleType.setUrl(fileDownloaduri);
   //    typeManagementService.updateTypeDetails(id,vehicleType);
//       VehicleType vehicleType1=vehicleType.getUrl();


        return new UploadFileResponse(fileName, fileDownloadUri,
                file.getContentType(), file.getSize());
    }


    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        // Loaddata file as Resource
        Resource resource = fileStorageService.loadFileAsResource(fileName);
        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
//            logger.info("Could not determine file type.");
        }
        // Fallback to the default content type if type could not be determined
        if(contentType == null) {
            contentType = "application/octet-stream";
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
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







package in.stackroute.umove.userservice.controller;

import in.stackroute.umove.userservice.model.*;
import in.stackroute.umove.userservice.service.PaymentServiceInterface;
import in.stackroute.umove.userservice.service.UserService;
import in.stackroute.umove.userservice.service.implementation.FileStorageService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;



@RestController
@RequestMapping("api/v1")
@AllArgsConstructor
@NoArgsConstructor
@CrossOrigin(origins="http://localhost:4200")
public class UserController
{
    @Autowired
    private FileStorageService fileStorageService;
    @Autowired
    private UserService userService;
    @Autowired
    PaymentServiceInterface paymentServiceInterface;

    @PostMapping(path = "users/adduser")
    public ResponseEntity<Map> addUser(@RequestBody UserData user) {
        user.setPaymentMethod(new ArrayList<>());
        UserData addedUser = userService.addUser(user);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", addedUser);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/users/{id}")
    public ResponseEntity<Map> deleteCampaign(@PathVariable("id") String id) {
        UserData deleteUser = userService.deleteUser(id);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", deleteUser);
        map.put("message", "User deleted");
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

@PatchMapping(path = "/users/{id}",consumes = {"application/json"})
public ResponseEntity updateUser(@PathVariable String id, @RequestBody UserData user){
    UserData data = userService.updateUser(id,user);
    Map<String, Object> map = new TreeMap<>();
    map.put("data", data);
    map.put("status", HttpStatus.OK);
    return new ResponseEntity<>(map, HttpStatus.OK);
}

@GetMapping(path = "users/{userId}/document")
public ResponseEntity<Map> getkycDetails(@PathVariable(value = "userId") String id)
{
    DocumentVerification documents =  userService.getById(id).getDocument();
    Map<String, Object> map = new TreeMap<>();
    map.put("data", documents);
    map.put("status", HttpStatus.OK);
    return new ResponseEntity<>(map, HttpStatus.OK);
}

@GetMapping("/users/{id}")
public ResponseEntity<Map> getUsersById(@PathVariable String id)
{
    UserData data = userService.getById(id);
    Map<String, Object> map = new TreeMap<>();
    map.put("data", data);
    map.put("status", HttpStatus.OK);
    return new ResponseEntity<>(map, HttpStatus.OK);

}

    @GetMapping("users")
    public ResponseEntity<Map> getUsers(@RequestParam(value = "name",
            required = false) String name, @RequestParam(value = "role", required = false) Role role,
                                        @RequestParam(value = "status",required = false) UserStatus userStatus)
    {
        List<UserData> users = userService.getUserList();
        if(name != null && !name.isEmpty()) {
            users=userService.findByName(name);
        }
        if(role!= null ) {
            users=userService.findByRole(role);
        }
        if(userStatus!= null ) {
            users=userService.findByUserStatus(userStatus);
        }
        Map<String, Object> map = new TreeMap<>();
        map.put("data", users);
        map.put("count", users.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
    @PostMapping("/users/document/uploadImage")
    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file,@RequestParam(name = "uid",required = true) String uid) {
        String fileName = fileStorageService.storeFile(file,uid);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName)
                .toUriString();

        return new UploadFileResponse(fileName, fileDownloadUri,
                file.getContentType(), file.getSize());
    }

//    @GetMapping("/downloadFile/{fileName:.+}")
//    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
//        // Loaddata file as Resource
//        Resource resource = fileStorageService.loadFileAsResource(fileName);
//
//        // Try to determine file's content type
//        String contentType = null;
//        try {
//            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
//        } catch (IOException ex) {
////            logger.info("Could not determine file type.");
//        }
//
//        // Fallback to the default content type if type could not be determined
//        if(contentType == null) {
//            contentType = "application/octet-stream";
//        }
//
//        return ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType(contentType))
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
//                .body(resource);
//    }


    @GetMapping("users/{userId}/payments")
    public ResponseEntity<?> getPayments(@PathVariable("userId") String objid) {
        System.out.println(this.getClass().getSimpleName() + " - Get all payment service is invoked.");
        Map<String,Object> map = new TreeMap<>();
        map.put("data",paymentServiceInterface.getPayments(objid));
        map.put("status",HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PostMapping("users/{userId}/payments")
    public ResponseEntity<?> addNewPaymentMethod(@PathVariable("userId") String objid,@RequestBody UserPaymentMethod userPaymentMethod) {
        System.out.println(userPaymentMethod.getPaymentProvider());
        int pId = userService.getById(objid).getPaymentMethod().size()+1;
        userPaymentMethod.setPId(pId);
        System.out.println(this.getClass().getSimpleName() + " - Create new payment method is invoked.");
        Map<String,Object> map = new TreeMap<>();
        map.put("data", paymentServiceInterface.addNewPaymentMethod(objid,userPaymentMethod));
        map.put("status",HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PatchMapping("users/{userId}/payments/{paymentId}")
    public ResponseEntity<?> updatePaymentMethodById(@PathVariable("userId") String objid, @PathVariable("paymentId") int pid,@RequestBody UserPaymentMethod userPaymentMethod){
        System.out.println(this.getClass().getSimpleName() + "- Update Method is invoked");
        Map<String,Object> map = new TreeMap<>();
        map.put("data",paymentServiceInterface.updatePaymentMethodById(objid,pid,userPaymentMethod));
        map.put("status",HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @RequestMapping(value = "users/{userId}/payments/{paymentsId}", method= RequestMethod.DELETE)
    public ResponseEntity<?> deletePaymentMethodById(@PathVariable("userId") String objid, @PathVariable("paymentsId") int pid) throws Exception {
        System.out.println(this.getClass().getSimpleName() + " - Delete Payment Method by id is invoked.");
        Map<String,Object> map = new TreeMap<>();
        paymentServiceInterface.deletePaymentMethodById(objid, pid);
        map.put("status",HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping(path = "users/{userId}/payments/{paymentId}")
    public ResponseEntity<?> getPaymentMethodById(@PathVariable("userId") String objid, @PathVariable("paymentId") int pid) {
        System.out.println(this.getClass().getSimpleName() + " - Get Payment details by id is invoked.");
        Map<String,Object> map = new TreeMap<>();
        map.put("data",paymentServiceInterface.getPaymentMethodById(objid,pid));
        map.put("status",HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
    @GetMapping(path = "users/document")
    public ResponseEntity<Map> getDocument()
    {
        List<UserData> users = userService.getUserList();

        List<Map<String, Object>> list = users.stream().map(userData -> {
            Map<String, Object> map = new TreeMap<>();
            map.put("id",userData.getId());
            map.put("name", userData.getName());
            map.put("mobileNumber", userData.getMobileNumber());
            map.put("document", userData.getDocument());
            return map;
        }).collect(Collectors.toList());

        Map<String, Object> map = new TreeMap<>();
        map.put("data", list);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}

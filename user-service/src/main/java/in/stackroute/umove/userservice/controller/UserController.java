package in.stackroute.umove.userservice.controller;

import in.stackroute.umove.userservice.model.DocumentVerification;
import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import in.stackroute.umove.userservice.service.UserService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;


/**
 * Setting path and version for our api endpoints and connecting frontend with backend.
 *
 *
 */
@CrossOrigin(origins = "http://localhost:8100")
@RestController
@RequestMapping("api/v1")

@AllArgsConstructor
@NoArgsConstructor
public class UserController
{
    @Autowired
    private UserService userService;

    @PostMapping(path = "users/adduser")
    public ResponseEntity<Map> addUser(@RequestBody UserData user)
    {
        final UserData addedUser = userService.addUser(user);
        final Map<String, Object> map = new TreeMap<>();
        map.put("data", addedUser);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }


@PatchMapping(path = "/users/{id}",consumes = {"application/json"})
public ResponseEntity updateUser(@PathVariable ObjectId id, @RequestBody UserData user){
    UserData data = userService.updateUser(id,user);
    Map<String, Object> map = new TreeMap<>();
    map.put("data", data);
    map.put("status", HttpStatus.OK);
    return new ResponseEntity<>(map, HttpStatus.OK);
}

@GetMapping(path = "users/{userId}/document")
public ResponseEntity<Map> getkycDetails(@PathVariable(value = "userId") ObjectId id)
{
    DocumentVerification documents =  userService.getById(id).getDocument();
    Map<String, Object> map = new TreeMap<>();
    map.put("data", documents);
    map.put("status", HttpStatus.OK);
    return new ResponseEntity<>(map, HttpStatus.OK);
}


    @PostMapping("/users/document/uploadImage")
    public String uploadImage(@RequestParam(name="imageFile",required = true)MultipartFile imageFile,
                              @RequestParam(name = "uid",required = true) String uid)
    {
        String returnValue = "start";
        try {
            userService.saveImage(imageFile,uid);
        }catch (Exception e){
            e.printStackTrace();
            returnValue = "Error";
        }
        return returnValue;
    }

//    @PostMapping("/users/document/uploadImage")
//    public ResponseEntity <Map>uploadImage(@RequestParam(name="imageFile",required = true) MultipartFile imageFile,
//                                           @RequestParam(name = "uid",required = true) String uid)
//    {
//        final Map<String, Object> map = new TreeMap<>();
//        String returnValue = "start";
//        try {
//            userService.saveImage(imageFile,uid);
//        }catch (Exception e){
//            returnValue = "Error";
//        }
//        map.put("status", HttpStatus.OK);
//        return new ResponseEntity<>(map,HttpStatus.OK);
//    }

@GetMapping("/users/{id}")
public ResponseEntity<Map> getUsersById(@PathVariable ObjectId id)
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

    @PostMapping("/uploadFile")
    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file) {
        String fileName = fileStorageService.storeFile(file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName)
                .toUriString();

        return new UploadFileResponse(fileName, fileDownloadUri,
                file.getContentType(), file.getSize());
    }

}

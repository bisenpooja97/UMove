package in.stackroute.umove.userservice.controller;

import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import in.stackroute.umove.userservice.service.UserService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

/**
 * Setting path and version for our api endpoints
 *
 *
 */
@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "http://localhost:4200/#/")
public class UserController
{
    @Autowired
    private UserService userService;

    /**
     *
     *  End Point: api/v1/users Method: GET
     *      to get all the users list by name,role and status
     *
     *
     */
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

    @GetMapping("/users/{id}")
    public UserData getUsersById(@PathVariable ObjectId id)
    {
        return userService.getUserBy_id(id);
    }

     /*
      *  End Point: api/v1/users/adduser Method: POST
      *      to add a new user
      *
      */
    @PostMapping(path = "users/adduser")
    public ResponseEntity<Map> addUser(@RequestBody UserData user)
    {
        UserData addedUser = userService.addUser(user);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", addedUser);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    /**
     *
     *  End Point: api/v1/users/{id} Method: PATCH
     *  to update user by id
     *
     *
     */
    @PatchMapping(path = "/users/{id}",consumes = {"application/json"})
    public ResponseEntity updateUser(@PathVariable ObjectId id, @RequestBody UserData user){
        UserData data = userService.updateUser(id,user);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", data);
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
    /**
     *
     *  End Point: api/v1/users/{id} Method: GET
     *  to get user's document
     *
     *
     */
    @GetMapping(path = "users/document")
    public ResponseEntity<Map> getDocument()
    {
        List<UserData> users = userService.getUserList();

        List<Map<String, Object>> list = users.stream().map(userData -> {
            Map<String, Object> map = new TreeMap<>();
            map.put("_id",userData.get_Id());
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

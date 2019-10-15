package in.stackroute.umove.userservice.controller;

import in.stackroute.umove.userservice.model.*;
import in.stackroute.umove.userservice.service.PaymentServiceInterface;
import in.stackroute.umove.userservice.service.UserService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.Map;
import java.util.TreeMap;

@RestController
@RequestMapping("api/v1")
public class UserController{
    @Autowired
    UserService userService;
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

    @GetMapping("/users/{userId}")
    public UserData getUsersById(@PathVariable("userId") ObjectId objid) {
        return userService.getById(objid);
    }

    @GetMapping("users/{userId}/payments")
    public ResponseEntity<?> getPayments(@PathVariable("userId") ObjectId objid) {
        System.out.println(this.getClass().getSimpleName() + " - Get all payment service is invoked.");
        Map<String,Object> map = new TreeMap<>();
        map.put("data",paymentServiceInterface.getPayments(objid));
        map.put("status",HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PostMapping("users/{userId}/payments")
    public ResponseEntity<?> addNewPaymentMethod(@PathVariable("userId") ObjectId objid,@RequestBody UserPaymentMethod userPaymentMethod) {
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
    public ResponseEntity<?> updatePaymentMethodById(@PathVariable("userId") ObjectId objid, @PathVariable("paymentId") int pid,@RequestBody UserPaymentMethod userPaymentMethod){
        System.out.println(this.getClass().getSimpleName() + "- Update Method is invoked");
        Map<String,Object> map = new TreeMap<>();
        map.put("data",paymentServiceInterface.updatePaymentMethodById(objid,pid,userPaymentMethod));
        map.put("status",HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @RequestMapping(value = "users/{userId}/payments/{paymentsId}", method= RequestMethod.DELETE)
    public ResponseEntity<?> deletePaymentMethodById(@PathVariable("userId") ObjectId objid, @PathVariable("paymentsId") int pid) throws Exception {
        System.out.println(this.getClass().getSimpleName() + " - Delete Payment Method by id is invoked.");
        Map<String,Object> map = new TreeMap<>();
        paymentServiceInterface.deletePaymentMethodById(objid, pid);
        map.put("status",HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping(path = "users/{userId}/payments/{paymentId}")
    public ResponseEntity<?> getPaymentMethodById(@PathVariable("userId") ObjectId objid, @PathVariable("paymentId") int pid) {
        System.out.println(this.getClass().getSimpleName() + " - Get Payment details by id is invoked.");
        Map<String,Object> map = new TreeMap<>();
        map.put("data",paymentServiceInterface.getPaymentMethodById(objid,pid));
        map.put("status",HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}

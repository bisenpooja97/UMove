/**
 *  Customized Exceptional Handling Class
 */

// Package
package in.stackroute.umove.zoneservice.exception;

// Importing files
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import java.util.Date;
import java.util.HashMap;

@ControllerAdvice
@RestController
public class CustomizedExceptionHandler extends ResponseEntityExceptionHandler {

    // Zone already exist customized exception
    @ExceptionHandler(ZoneAlreadyExistException.class)
    public final ResponseEntity<Object> handleZoneAlreadyExistException
    (ZoneAlreadyExistException exc, WebRequest request) {
        ExceptionModel exceptionModel = new ExceptionModel(new Date(), exc.getMessage(), request.getDescription(false));
        return new ResponseEntity(exceptionModel, HttpStatus.OK);
    }

    // Zone not found customized exception
    @ExceptionHandler(ZoneNotFoundException.class)
    public final ResponseEntity<Object> handleZoneNotFoundException
    (ZoneNotFoundException exc, WebRequest request) {
        ExceptionModel exceptionModel =  new ExceptionModel(new Date(), exc.getMessage()+" No such zone found!!", request.getDescription(false));
        return  new ResponseEntity(exceptionModel, HttpStatus.OK);
    }

    // Zones not found customized exception
    @ExceptionHandler(ZonesNotFoundException.class)
    public final ResponseEntity<Object> handleZonesNotFoundException
    (ZonesNotFoundException exc, WebRequest request) {
        ExceptionModel exceptionModel =  new ExceptionModel(new Date(), exc.getMessage(), request.getDescription(false));
        return  new ResponseEntity(exceptionModel, HttpStatus.OK);
    }

    HashMap<String,Object> responseObject;
    @ExceptionHandler(TypeNotFoundException.class)
    public final ResponseEntity<Object> handleTypeNotFoundException(TypeNotFoundException ex, WebRequest request){
        responseObject=new HashMap<>();
        responseObject.put("result",null);
        responseObject.put("msg",ex.getMessage());
        responseObject.put("error","true");
        ExceptionModel exceptionalModel=new ExceptionModel(new Date(),ex.getMessage(),request.getDescription(false));
        return new ResponseEntity<>(exceptionalModel, HttpStatus.OK);
    }

    //Type already exists exception handling
    @ExceptionHandler(TypeAlreadyExistException.class)
    public final ResponseEntity<Object>handleTypeAlreadyExistException(TypeAlreadyExistException ex, WebRequest request){
        ExceptionModel exceptionalModel=new ExceptionModel(new Date(),ex.getMessage(),request.getDescription(false));
        return new ResponseEntity(exceptionalModel, HttpStatus.OK);
    }

    //Registration No already exists
    @ExceptionHandler(RegistrationNoAlreadyExistException.class)
    public final ResponseEntity<Object>handleRegistrationNoAlreadyExistException(RegistrationNoAlreadyExistException ex, WebRequest request){
        ExceptionModel exceptionalModel=new ExceptionModel(new Date(),ex.getMessage(),request.getDescription(false));
        return new ResponseEntity(exceptionalModel, HttpStatus.OK);
    }
    @ExceptionHandler(FuelNameAlreadyExistException.class)
    public final ResponseEntity<Object>handleFuelNameAlreadyExistException(FuelNameAlreadyExistException ex,WebRequest request){
        ExceptionModel exceptionalModel=new ExceptionModel(new Date(),ex.getMessage(),request.getDescription(false));
        return new ResponseEntity(exceptionalModel, HttpStatus.OK);
    }

    @ExceptionHandler(ChassisNoAlreadyExistException.class)
    public final ResponseEntity<Object>handleChassisNoAlreadyExistException(ChassisNoAlreadyExistException ex,WebRequest request){
        ExceptionModel exceptionalModel=new ExceptionModel(new Date(),ex.getMessage(),request.getDescription(false));
        return new ResponseEntity(exceptionalModel, HttpStatus.OK);
    }

    @ExceptionHandler(InsuranceNoAlreadyExistException.class)
    public final ResponseEntity<Object>handleInsuranceNoAlreadyExistException(InsuranceNoAlreadyExistException ex,WebRequest request){
        ExceptionModel exceptionalModel=new ExceptionModel(new Date(),ex.getMessage(),request.getDescription(false));
        return new ResponseEntity(exceptionalModel, HttpStatus.OK);
    }

    @ExceptionHandler(LastServiceDateWrongException.class)
    public final ResponseEntity<Object>handleInsuranceNoAlreadyExistException(LastServiceDateWrongException ex,WebRequest request){
        ExceptionModel exceptionalModel=new ExceptionModel(new Date(),ex.getMessage(),request.getDescription(false));
        return new ResponseEntity(exceptionalModel, HttpStatus.OK);
    }

}

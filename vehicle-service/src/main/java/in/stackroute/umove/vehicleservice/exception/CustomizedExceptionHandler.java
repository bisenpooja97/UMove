package in.stackroute.umove.vehicleservice.exception;

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


//Type not found exception handling function
public class CustomizedExceptionHandler extends ResponseEntityExceptionHandler {
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


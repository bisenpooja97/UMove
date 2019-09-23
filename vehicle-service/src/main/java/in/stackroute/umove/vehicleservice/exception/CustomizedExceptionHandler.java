package in.stackroute.umove.vehicleservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;
import java.util.HashMap;

@ControllerAdvice
@RestController

public class CustomizedExceptionHandler {
    HashMap<String,Object> responseObject;
    /*@ExceptionHandler(TypeNotFoundException.class)
    public final ResponseEntity<Object> handleMusicNotFoundException(MusicNotFoundException ex, WebRequest request){
        responseObject=new HashMap<>();
        responseObject.put("result",null);
        responseObject.put("msg",ex.getMessage());
        responseObject.put("error","true");
        ExceptionalModel exceptionalModel=new ExceptionalModel(new Date(),ex.getMessage(),request.getDescription(false));
        return new ResponseEntity<>(responseObject, HttpStatus.NOT_FOUND);
    }*/

    @ExceptionHandler(TypeAlreadyExistException.class)
    public final ResponseEntity<Object>handleMusicAlreadyExistException(TypeAlreadyExistException ex, WebRequest request){
       ExceptionModel exceptionalModel=new ExceptionModel(new Date(),ex.getMessage(),request.getDescription(false));
        return new ResponseEntity(exceptionalModel, HttpStatus.NOT_FOUND);
    }

}

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
}

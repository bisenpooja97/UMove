package in.stackroute.umove.bookingservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import in.stackroute.umove.bookingservice.model.Exception;
import java.util.Date;

/*
 *  Customized exception handling class
 */

@ControllerAdvice
@RestController
public class CustomizedExceptionHandler extends ResponseEntityExceptionHandler {

    //Booking not found customized exception
    @ExceptionHandler(RideNotFoundException.class)
    public final ResponseEntity<Object> handleTrackingNotFoundException(RideNotFoundException ex, WebRequest request) {
        Exception exception = new Exception(new Date(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity(exception, HttpStatus.NOT_FOUND);
    }

}


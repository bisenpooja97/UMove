/**
 *  Zone Already Exist Exception Class
 */

// Package
package in.stackroute.umove.zoneservice.exception;

// Importing files
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.OK)

public class ZoneAlreadyExistException extends RuntimeException{
    public ZoneAlreadyExistException(String exception) {
        super(exception);
    }
}

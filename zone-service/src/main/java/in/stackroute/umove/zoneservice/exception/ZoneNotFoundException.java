/**
 *  Zone Not Found Exception Class
 */

// Package
package in.stackroute.umove.zoneservice.exception;

// Importing files
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.OK)
public class ZoneNotFoundException extends RuntimeException {
    public ZoneNotFoundException(String exception) {
        super(exception);
    }
}

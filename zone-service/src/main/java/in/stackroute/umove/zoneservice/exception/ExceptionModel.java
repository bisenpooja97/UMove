/**
 * Model Class of Exceptions
 */

// Package
package in.stackroute.umove.zoneservice.exception;

// Importing files
import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Date;

@Getter
@AllArgsConstructor
public class ExceptionModel {

    private Date timeStamp;
    private String message;
    private String details;

}

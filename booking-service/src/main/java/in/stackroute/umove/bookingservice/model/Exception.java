package in.stackroute.umove.bookingservice.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Date;

/*
 *  Model for exception
 */

@Getter
@AllArgsConstructor
public class Exception {

    private Date timeStamp;
    private String message;
    private String details;

}

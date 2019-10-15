package in.stackroute.umove.bookingservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/*
 *  Exception Handler Class for BookingNotFoundException
 */

@ResponseStatus(HttpStatus.NOT_FOUND)
public class RideNotFoundException extends RuntimeException{

    public RideNotFoundException(String s)
    {
        super(s);
    }

}


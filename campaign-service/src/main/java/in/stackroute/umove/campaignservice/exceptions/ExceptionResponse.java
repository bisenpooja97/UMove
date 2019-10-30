package in.stackroute.umove.campaignservice.exceptions;

import lombok.Getter;

import java.util.Date;
/**
 * Exception response according to timestamp,message,details
 */
@Getter

public class ExceptionResponse {
    private Date timestamp;
    private String message;
    private String details;

    public ExceptionResponse(Date timestamp, String message, String details)
    {
        this.timestamp = timestamp;
        this.message = message;
        this.details = details;
    }


}

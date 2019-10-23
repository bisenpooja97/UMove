package in.stackroute.umove.vehicleservice.exception;

import java.util.Date;

public class ExceptionModel {
    private Date TimeStamp;
    private String message;
    private String details;

    public ExceptionModel(Date timeStamp, String message, String details) {
        TimeStamp = timeStamp;
        this.message = message;
        this.details = details;
    }

    public Date getTimeStamp() {
        return TimeStamp;
    }

    public String getMessage() {
        return message;
    }

    public String getDetails() {
        return details;
    }
}

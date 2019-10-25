package in.stackroute.umove.bookingservice.model;

public enum RideStatus {
    Confirmed,
    Started,
    CancelledWithinThreshold,
    CancelledAfterThreshold,
    Auto_Cancelled,
    Ended
}

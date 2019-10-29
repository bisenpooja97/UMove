package in.stackroute.umove.vehicleservice.exception;

public class RegistrationNoAlreadyExistException extends RuntimeException {
    public RegistrationNoAlreadyExistException(String message) {
        super(message);
    }
}

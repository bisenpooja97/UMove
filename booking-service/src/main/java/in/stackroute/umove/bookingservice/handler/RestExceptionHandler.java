package in.stackroute.umove.bookingservice.handler;


import in.stackroute.umove.bookingservice.error.ApiError;
import in.stackroute.umove.bookingservice.exception.*;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import static org.springframework.http.HttpStatus.ALREADY_REPORTED;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String error = "Malformed JSON request";
        return buildResponseEntity(new ApiError(HttpStatus.BAD_REQUEST, error, ex));
    }

    private ResponseEntity<Object> buildResponseEntity(ApiError apiError) {
        return new ResponseEntity<>(apiError, apiError.getStatus());
    }

    @ExceptionHandler(RideNotFoundException.class)
    protected ResponseEntity<Object> handleEntityNotFound(
            RideNotFoundException ex) {
        ApiError apiError = new ApiError(NOT_FOUND);
        apiError.setMessage(ex.getMessage());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(RideAlreadyBookedException.class)
    protected ResponseEntity<Object> handleEntityAlreadyExists(
            RideAlreadyBookedException ex) {
        ApiError apiError = new ApiError(ALREADY_REPORTED);
        apiError.setMessage(ex.getMessage());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(PaymentDetailsNotFoundException.class)
    protected ResponseEntity<Object> handleEntityNotFoundForPayment(
            PaymentDetailsNotFoundException ex) {
        ApiError apiError = new ApiError(NOT_FOUND);
        apiError.setMessage(ex.getMessage());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(ConfigurationNotFoundException.class)
    protected ResponseEntity<Object> handleEntityNotFoundForConfiguration(
            ConfigurationNotFoundException ex) {
        ApiError apiError = new ApiError(NOT_FOUND);
        apiError.setMessage(ex.getMessage());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(ConfigurationAlreadyExistsException.class)
    protected ResponseEntity<Object> handleEntityAlreadyExistsForConfiguration(
            ConfigurationAlreadyExistsException ex) {
        ApiError apiError = new ApiError(ALREADY_REPORTED);
        apiError.setMessage(ex.getMessage());
        return buildResponseEntity(apiError);
    }

}
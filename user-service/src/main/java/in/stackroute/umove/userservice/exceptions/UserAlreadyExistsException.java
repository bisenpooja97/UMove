package in.stackroute.umove.userservice.exceptions;

/**
 *
 * Throwing exception when user already exists
 */

public class UserAlreadyExistsException extends RuntimeException
{
    public UserAlreadyExistsException(String exception)
    {
        super(exception);
    }
}

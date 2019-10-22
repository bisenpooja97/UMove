package in.stackroute.umove.userservice.exceptions;

/**
 * Throwing exception when user is not found
 *
 */
public class UserNotFoundException extends RuntimeException
{
    public UserNotFoundException(String exception)
    {
        super(exception);
    }
}

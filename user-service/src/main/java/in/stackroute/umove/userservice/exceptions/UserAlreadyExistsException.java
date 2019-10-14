package in.stackroute.umove.userservice.exceptions;

public class UserAlreadyExistsException extends RuntimeException
{
    public UserAlreadyExistsException(String s)
    {
        super(s);
    }
}

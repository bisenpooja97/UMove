package in.stackroute.umove.userservice.exceptions;

public class UserNotFoundException extends RuntimeException
{
    public UserNotFoundException(String s)
    {
        super(s);
    }
}

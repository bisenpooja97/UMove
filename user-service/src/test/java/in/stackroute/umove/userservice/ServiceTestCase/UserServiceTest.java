package in.stackroute.umove.userservice.ServiceTestCase;

import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import in.stackroute.umove.userservice.repository.UserRepository;
import in.stackroute.umove.userservice.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

public class UserServiceTest
{

    @Autowired
    private UserService userService;
    @MockBean
    private UserRepository userRepository;

    @Test
    public void getUserListTest() {
        when(userRepository.findAll())
                .thenReturn(Stream.of(new UserData("XYZ", "9700056784", "xyz@gmail.com", Role.User, UserStatus.Inactive))
                        .collect(Collectors.toList()));
        assertEquals(1, userService.getUserList().size());
    }

}

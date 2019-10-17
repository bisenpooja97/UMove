package in.stackroute.umove.userservice.ServiceTestCase;

import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import in.stackroute.umove.userservice.repository.UserRepository;
import in.stackroute.umove.userservice.service.UserService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

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


    @Test
    public void findByNameTest() {
        String name = "ABC";
        when(userRepository.findByName(name)).thenReturn(Stream.of(new UserData("XYZ", "9700056784", "xyz@gmail.com", Role.User, UserStatus.Inactive))
                .collect(Collectors.toList()));
        assertEquals(1, userService.findByName(name).size());
    }

    @Test
    public void findByRoleTest() {
        String role = "User";
        when(userRepository.findByRole(Role.User)).thenReturn(Stream.of(new UserData("XYZ", "9700056784", "xyz@gmail.com", Role.User, UserStatus.Inactive))
                .collect(Collectors.toList()));
        assertEquals(1, userService.findByRole(Role.User).size());
    }

    @Test
    public void findByUserStatusTest() {
        String userStatus = "Inactive";
        when(userRepository.findByUserStatus(UserStatus.Inactive)).thenReturn(Stream.of(new UserData("XYZ", "9700056784", "xyz@gmail.com", Role.User, UserStatus.Inactive))
                .collect(Collectors.toList()));
        assertEquals(1, userService.findByUserStatus(UserStatus.Inactive).size());
    }

    @Test
    public void addUserTest(){
        UserData user = new UserData("ABCD", "9700056784", "xyz@gmail.com", Role.Admin, UserStatus.Active);
        when(userRepository.save(user)).thenReturn(user);
        assertEquals(user,userService.addUser(user));
    }

}

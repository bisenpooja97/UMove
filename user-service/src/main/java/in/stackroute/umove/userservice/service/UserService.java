package in.stackroute.umove.userservice.service;

import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface UserService
{
    List<UserData> getUserList();

    List<UserData> findByName(String name);

    List<UserData> findByRole(Role role);

    List<UserData> findByUserStatus(UserStatus userStatus);

    UserData addUser(UserData user);

    UserData getByid(String id);

    UserData updateUser(String id, UserData user);

    void saveImage(MultipartFile imageFile, String uid) throws Exception;

    UserData updateDocumentStatus(String id, String status);
}

package in.stackroute.umove.userservice.service;


import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import org.bson.types.ObjectId;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UserService {
    List<UserData> getUserList();
    List<UserData> findByName(String name);
    UserData addUser(UserData user);
    UserData getById(ObjectId objid);
    UserData updateUser(ObjectId objid, UserData user);
    void saveImage(MultipartFile imageFile, String uid) throws Exception;
    List<UserData> findByRole(Role role);
    List<UserData> findByUserStatus(UserStatus userStatus);
}

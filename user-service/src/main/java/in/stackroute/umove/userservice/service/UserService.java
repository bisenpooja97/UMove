package in.stackroute.umove.userservice.service;


import in.stackroute.umove.userservice.model.DocumentStatus;
import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import org.bson.types.ObjectId;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UserService {
    List<UserData> getUserList();
    List<UserData> findByName(String name);
    UserData deleteUser(String objid);
    UserData addUser(UserData user);
    UserData getById(String objid);
    UserData updateUser(String objid, UserData user);
    UserData updateDocumentStatus(String id, String status);
//    void saveImage(MultipartFile imageFile, String uid) throws Exception;
    List<UserData> findByRoles(Role role);
    List<UserData> findByDocumentStatus(DocumentStatus documentStatus);
    List<UserData> findByUserStatus(UserStatus userStatus);
}

package in.stackroute.umove.userservice.service;


import in.stackroute.umove.userservice.model.DocumentStatus;
import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;

import java.util.List;

public interface UserService {
    List<UserData> getUserList();
    List<UserData> findByName(String name);
    UserData updateDocumentStatus(String id, String status);
    UserData addUser(UserData user);
    UserData getById(String objid);
    UserData updateUser(String objid, UserData user);
    List<UserData> findByRole(Role role);
    List<UserData> findByUserStatus(UserStatus userStatus);
//    List<UserData> findByDocumentStatus(DocumentStatus documentStatus);
    UserData deleteUser(String objid);
    //    void saveImage(MultipartFile imageFile, String uid) throws Exception;
}

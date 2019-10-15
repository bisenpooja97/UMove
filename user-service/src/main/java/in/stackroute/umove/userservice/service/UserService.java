package in.stackroute.umove.userservice.service;

import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface UserService {
    List<UserData> getUserList();
    UserData addUser(UserData user);
    UserData getById(ObjectId objid);
}

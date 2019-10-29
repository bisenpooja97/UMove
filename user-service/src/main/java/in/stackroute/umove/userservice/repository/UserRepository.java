package in.stackroute.umove.userservice.repository;

import in.stackroute.umove.userservice.model.DocumentStatus;
import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserRepository extends MongoRepository<UserData, String> {
    List<UserData> findByName(String name);

    UserData findByid(String id);
    UserData findByMobileNumber(String mobileNumber);

    UserData getUserByid(String id);

    List<UserData> findByRole(Role role);

    List<UserData> findByUserStatus(UserStatus userStatus);

    @Query("{'document.documentStatus':'?0' , 'role':'User'}")
    List<UserData> findByDocumentStatus(DocumentStatus documentStatus);

}

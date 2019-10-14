package in.stackroute.umove.userservice.repository;

import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<UserData,String>
{
    List<UserData> findByName(String name);

    List<UserData> findByRole(Role Role);

    List<UserData> findByUserStatus(UserStatus userStatus);

    UserData getUserBy_id(ObjectId _id);

    UserData findBy_id(ObjectId _id);
}

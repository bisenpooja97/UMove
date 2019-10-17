package in.stackroute.umove.userservice.repository;

import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<UserData,String>
{
    List<UserData> findByName(String name);

    List<UserData> findByRole(Role Role);

    List<UserData> findByUserStatus(UserStatus userStatus);

    UserData getUserByid(String id);

    UserData findByid(String id);

    UserData getByid(String id);
}

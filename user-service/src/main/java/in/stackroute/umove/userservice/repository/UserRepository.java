package in.stackroute.umove.userservice.repository;


import in.stackroute.umove.userservice.model.UserData;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<UserData, String> {
    UserData findBy_id(ObjectId _id);
    UserData getUserBy_id(ObjectId _id);
}

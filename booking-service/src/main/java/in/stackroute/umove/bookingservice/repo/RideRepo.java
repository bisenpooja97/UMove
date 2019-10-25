package in.stackroute.umove.bookingservice.repo;

import in.stackroute.umove.bookingservice.model.Ride;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RideRepo extends MongoRepository<Ride, String> {
    Ride findBy_id(ObjectId _id);
    @Query("{ 'rider._id' : ?0 , 'status' : ?1}")
    Ride findByUserIdNStatus(String id, String bookingStatus);
    @Query("{'rider._id' : ?0 }")
    List<Ride> findRidesByUserId(String userId);
}

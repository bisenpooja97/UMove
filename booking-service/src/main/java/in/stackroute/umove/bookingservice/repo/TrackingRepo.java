package in.stackroute.umove.bookingservice.repo;

import in.stackroute.umove.bookingservice.model.TrackingLatitudeLongitude;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface TrackingRepo extends MongoRepository<TrackingLatitudeLongitude, String> {

    @Query(" { 'rideId' : ?0 } ")
    TrackingLatitudeLongitude findByRideId(String RideId);
}

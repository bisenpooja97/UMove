package in.stackroute.umove.zoneservice.repository;

import in.stackroute.umove.zoneservice.model.ZoneTypeCount;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ZoneTypeCountRepo extends MongoRepository<ZoneTypeCount, Integer> {

    @Query("{ 'zoneId':?0, 'typeId':?1}")
    ZoneTypeCount findZoneType(String zoneId, String typeId);
}

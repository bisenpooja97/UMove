package in.stackroute.umove.zoneservice.repository;

import in.stackroute.umove.zoneservice.model.Fuel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FuelRepo extends MongoRepository<Fuel,String> {
    Fuel findByName(String name);
}

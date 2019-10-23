package in.stackroute.umove.bookingservice.repo;

import in.stackroute.umove.bookingservice.model.Configuration;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ConfigRepo extends MongoRepository<Configuration, String> {

    Configuration findByName(String name);
}

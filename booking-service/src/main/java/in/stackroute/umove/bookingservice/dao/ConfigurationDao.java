package in.stackroute.umove.bookingservice.dao;

import in.stackroute.umove.bookingservice.model.Configuration;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConfigurationDao extends MongoRepository<Configuration, String> {

    Configuration findByName(String name);
}

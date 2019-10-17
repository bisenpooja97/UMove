package in.stackroute.umove.vehicleservice.repository;

import in.stackroute.umove.vehicleservice.model.Fuel;
import in.stackroute.umove.vehicleservice.service.ServiceFuel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface FuelRepo extends MongoRepository<Fuel,String> {
    Fuel findByName(String name);
}

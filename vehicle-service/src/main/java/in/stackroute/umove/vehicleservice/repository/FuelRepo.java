package in.stackroute.umove.vehicleservice.repository;

import in.stackroute.umove.vehicleservice.model.Fuel;
import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface FuelRepo extends MongoRepository<Fuel,String> {
//    Fuel findByName(String name, Pageable pageable);
    Fuel findByNameIgnoreCase(String name);
    Page<Fuel> findAll(Pageable pageable);
}

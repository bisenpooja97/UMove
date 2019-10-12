package in.stackroute.umove.vehicleservice.repository;

import in.stackroute.umove.vehicleservice.model.VehicleType;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface VehicleTypeRepo extends MongoRepository<VehicleType,String> {
    List<VehicleType> findByname(String name);
    VehicleType findByTypeId(String typeId);
    VehicleType findByName(String name);


}

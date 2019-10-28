package in.stackroute.umove.zoneservice.repository;

import in.stackroute.umove.zoneservice.model.VehicleType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface VehicleTypeRepo extends MongoRepository<VehicleType,String> {


    VehicleType findByid(String id);
    VehicleType findByNameIgnoreCase(String name);
    Page<VehicleType> findAll(Pageable pageable);

    @Query("{'fuel.id':?0}")
    List<VehicleType> findByFuel(String fuel);

}

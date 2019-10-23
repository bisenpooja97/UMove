package in.stackroute.umove.zoneservice.repository;


import in.stackroute.umove.zoneservice.model.Vehicle;
import in.stackroute.umove.zoneservice.model.VehicleStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface VehicleRepo extends MongoRepository<Vehicle,String> {

    /*@Query(value = "{ 'type' : { 'name': {$regex : ?0, $options: 'i'}}}")
    List<Vehicle> findByTypeName(String name);*/
    @Query("{'type.name':?0}")
    Page<Vehicle> findByType(String type, Pageable pageable);

    @Query("{ 'zoneid':?0, 'type.name':?1}")
    Page<Vehicle> findByZoneType(String zone, String type, Pageable pageable);


    Page<Vehicle> findByzoneId(String zone_id, Pageable pageable);
    Vehicle findByregistrationNoIgnoreCase(String name);
    Vehicle findByChassisNumberIgnoreCase(String name);
    Vehicle findByInsuranceNoIgnoreCase(String name);
    Page<Vehicle> findByStatus(VehicleStatus status, Pageable pageable);
    Page<Vehicle> findAll(Pageable pageable);


}

package in.stackroute.umove.vehicleservice.repository;


import in.stackroute.umove.vehicleservice.model.Vehicle;
import in.stackroute.umove.vehicleservice.model.VehicleStatus;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface VehicleRepo extends MongoRepository<Vehicle,String> {

    /*@Query(value = "{ 'type' : { 'name': {$regex : ?0, $options: 'i'}}}")
    List<Vehicle> findByTypeName(String name);*/
    @Query("{'type.name':?0}")
    List<Vehicle> findByType(String type);

    @Query("{ 'zoneid':?0, 'type.name':?1}")
    List<Vehicle> findByZoneType(String zone,String type);

    List<Vehicle> findByzoneid(String zone_id);
    Vehicle findByregistrationNo(String name);
    Vehicle findByChassisNumber(String name);
    Vehicle findByInsuranceNo(String name);
//    Vehicle findByVehicleId(String vehicleId);
   // List<Vehicle> findByRegistrationNo(String name);
    List<Vehicle> findByStatus(VehicleStatus status);
    //List<Vehicle> fetchVehicleByTypeName(String tname);


}

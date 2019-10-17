package in.stackroute.umove.vehicleservice.repository;

import in.stackroute.umove.vehicleservice.model.VehicleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VehicleTypeRepo extends MongoRepository<VehicleType,String> {

    List<VehicleType> findByname(String name);
    VehicleType findByid(String id);
    VehicleType findByName(String name);
   //List <VehicleType> findByFuel(String id );

    @Query("{'fuel.id':?0}")
    List<VehicleType> findByFuel(String fuel);

//    @Query("{'fuel' :{'$ref' : 'fuel' , '$id' : ?0}}")
//    List<VehicleType> findByFuel(String fuel);

//    List<VehicleType> findByFuel(@Param("fuel") String name);


//
//    @Query("{ 'address': {'$ref': 'address', '$id': { '$oid': ?0 } } }")
//    List<VehicleType> findByFuel(String fuel);

//    List<VehicleType> findByFuelId(String id)


//    @Query("{'fuel.id':?0}")
//    List<VehicleType> findByFuelId(String fuel);
}

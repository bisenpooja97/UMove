package in.stackroute.umove.vehicleservice.repository;

import in.stackroute.umove.vehicleservice.model.Type;
import org.bouncycastle.crypto.util.DERMacData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TypeRepo extends JpaRepository<Type,Integer> {
    List<Type> findByname(String name);
    //@Query("from Type where name=?1 order by id");
   // @Query("from Type where name=?1 order by id");

}

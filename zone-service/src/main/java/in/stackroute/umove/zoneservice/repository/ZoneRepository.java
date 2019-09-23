package in.stackroute.umove.zoneservice.repository;

import in.stackroute.umove.zoneservice.model.Zones;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ZoneRepository extends JpaRepository<Zones, Integer> {

}

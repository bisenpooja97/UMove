package in.stackroute.umove.zoneservice.repository;

import in.stackroute.umove.zoneservice.model.Zones;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ZoneRepository extends JpaRepository<Zones, Integer> {

}

/**
 *  Repository Interface for Zones
 */

// Package
package in.stackroute.umove.zoneservice.repository;

// Importing files
import in.stackroute.umove.zoneservice.model.Zone;
import in.stackroute.umove.zoneservice.model.ZoneStatus;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ZoneRepository extends MongoRepository<Zone, Integer> {

    List<Zone> findZoneByName(String name);
    List<Zone> findZonesByLocality(String locality);
    Zone findByName(String name);
    Zone findZoneBySupervisorId(String supervisorId);
    List<Zone> findByStatus(ZoneStatus status);

}

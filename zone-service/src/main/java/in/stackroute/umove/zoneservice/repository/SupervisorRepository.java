package in.stackroute.umove.zoneservice.repository;

import in.stackroute.umove.zoneservice.model.Supervisor;
import in.stackroute.umove.zoneservice.model.SupervisorStatus;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface SupervisorRepository extends MongoRepository<Supervisor,String> {
    Supervisor findSupervisorById(String id);
    List<Supervisor> findBySupervisorStatus(SupervisorStatus status);
}

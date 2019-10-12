package in.stackroute.umove.zoneservice.repository;

import in.stackroute.umove.zoneservice.model.Supervisor;
import in.stackroute.umove.zoneservice.model.SupervisorStatus;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SupervisorRepository extends MongoRepository<Supervisor,String> {
    Supervisor findBySid(String sid);
    List<Supervisor> findBySupervisorStatus(SupervisorStatus status);
}

package in.stackroute.umove.zoneservice.service.serviceInterface;

import in.stackroute.umove.zoneservice.model.Supervisor;
import in.stackroute.umove.zoneservice.model.SupervisorStatus;

import java.util.List;
import java.util.Optional;

public interface ServiceSupervisor {
    Supervisor addNewSupervisor(Supervisor supervisor);
    List<Supervisor> findAllSupervisor();
    Optional<Supervisor> findByID(String sid);
    Supervisor updateSupervisorStatus(String sid, Supervisor supervisor);
    List<Supervisor> findByStatus(SupervisorStatus status);
}

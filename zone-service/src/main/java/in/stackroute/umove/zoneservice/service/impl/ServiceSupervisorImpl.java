package in.stackroute.umove.zoneservice.service.impl;

import in.stackroute.umove.zoneservice.model.Supervisor;
import in.stackroute.umove.zoneservice.model.SupervisorStatus;
import in.stackroute.umove.zoneservice.repository.SupervisorRepository;
import in.stackroute.umove.zoneservice.service.serviceInterface.ServiceSupervisor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceSupervisorImpl implements ServiceSupervisor {

    @Autowired
    private SupervisorRepository repository;

    @Override
    public Supervisor addNewSupervisor(Supervisor supervisor) {
        repository.save(supervisor);
        return supervisor;
    }

    @Override
    public List<Supervisor> findAllSupervisor() {
        List<Supervisor> supervisorList = repository.findAll();
        return supervisorList;
    }

    @Override
    public List<Supervisor> findByStatus(SupervisorStatus status) {
        List <Supervisor> supervisorList=repository.findBySupervisorStatus(status);
        return supervisorList;
    }


    @Override
    public Optional<Supervisor> findByID(String sid) {
        Optional<Supervisor> supervisorList = repository.findById(sid);
        return supervisorList;
    }

    @Override
    public Supervisor updateSupervisorStatus(String sid, Supervisor supervisor) {
        Supervisor supervisorData = repository.findBySid(sid);
        if(supervisorData != null){

            if(supervisor.getSupervisorStatus() != null){
                supervisorData.setSupervisorStatus(supervisor.getSupervisorStatus());
            }

        }

        return repository.save(supervisorData);
    }
}

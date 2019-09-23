package in.stackroute.umove.zoneservice.service.impl;

import in.stackroute.umove.zoneservice.model.Zones;
import in.stackroute.umove.zoneservice.repository.ZoneRepository;
import in.stackroute.umove.zoneservice.service.ServiceZone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ServiceZoneDummyImpl implements ServiceZone {

    @Autowired
    private ZoneRepository zoneRepository;

    @Override
    public void addNewZone(Zones zone) {

        zoneRepository.save(zone);

        //System.out.println("in service");
    }

    @Override
    public List<Zones> findAllZones() {
        return zoneRepository.findAll();
    }
}


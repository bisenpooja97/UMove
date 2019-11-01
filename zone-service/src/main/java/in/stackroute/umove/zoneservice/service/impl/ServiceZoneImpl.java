/**
 *  Service Class for Zones
 */

// Package
package in.stackroute.umove.zoneservice.service.impl;

// Importing files
import in.stackroute.umove.zoneservice.exception.ZoneAlreadyExistException;
import in.stackroute.umove.zoneservice.exception.ZoneNotFoundException;
import in.stackroute.umove.zoneservice.exception.ZonesNotFoundException;
import in.stackroute.umove.zoneservice.model.Vehicle;
import in.stackroute.umove.zoneservice.model.Zone;
import in.stackroute.umove.zoneservice.model.ZoneStatus;
import in.stackroute.umove.zoneservice.repository.ZoneRepository;
import in.stackroute.umove.zoneservice.service.ServiceVehicle;
import in.stackroute.umove.zoneservice.service.ServiceZone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class ServiceZoneImpl implements ServiceZone {


    @Autowired
    private ZoneRepository zoneRepository;

    @Autowired
    private ServiceVehicle vehicleManagementService;
    // Zone service for creating new zones
    @Override
    public Zone addNewZone(Zone zone) {
        List<Zone> zoneList = zoneRepository.findAll();
        Iterator<Zone> iterator = zoneList.iterator();
        while (iterator.hasNext()) {
            if (iterator.next().getName().equals(zone.getName())) {
                throw new ZoneAlreadyExistException("Zone name is already exist!!!");
            }
        }
        zone.setCreatedAt(LocalDateTime.now());
        zoneRepository.save(zone);
        return zone;
    }

    // Zone service for getting all zones
    @Override
    public List<Zone> findAllZones(int page) {
        List<Zone> zone = zoneRepository.findAll(new PageRequest(page,1000)).getContent();
        if(zone.isEmpty())
            throw new ZonesNotFoundException("No data found!!!!");
        return zone;
    }

    // Zone service for finding zones by name
    @Override
    public List<Zone> findByZoneName(String name) {
        List<Zone> zone = zoneRepository.findZoneByName(name);
        if(zone.isEmpty())
            throw new ZoneNotFoundException("Zone name-" + name);
        return zone;
    }

    // Zone service for finding zones by locality
    @Override
    public List<Zone> findZonesByLocality(String locality, int page) {
        List<Zone> zones = zoneRepository.findZonesByLocality(locality, new PageRequest(page,9)).getContent();
        if(zones.isEmpty()) {
            throw new ZonesNotFoundException("No data found");
        }
        return zones;
    }

    // Zone service for updating zones according to zone name
    @Override
    public Zone updateZoneDetails(String name, Zone zone) {
        Zone zoneModel = zoneRepository.findByNameIgnoreCase(name);
        if(zoneModel != null){
            if(zone.getName() != null){
                zoneModel.setName(zone.getName());
            }
            if(zone.getCapacity()!= 0){
                zoneModel.setCapacity(zone.getCapacity());
            }
            if(zone.getPincode()!= 0){
                zoneModel.setPincode(zone.getPincode());
            }
            if(zone.getStatus()!= null){
                zoneModel.setStatus(zone.getStatus());
            }
            if(zone.getSupervisorId() != null){
                zoneModel.setSupervisorId(zone.getSupervisorId());
            }
            if(zone.getSupervisorName() != null){
                zoneModel.setSupervisorName(zone.getSupervisorName());
            }
            if(zone.getSupervisorNumber() != null){
                zoneModel.setSupervisorNumber(zone.getSupervisorNumber());
            }
            if(zone.getSupervisorEmail() != null) {
                zoneModel.setSupervisorEmail(zone.getSupervisorEmail());
            }
            return zoneRepository.save(zoneModel);
        }

        else
            throw new ZonesNotFoundException("No data found");

    }

    // Zone service for getting nearby zones
    @Override
    public List<Zone> getNearbyZones(Double lon, Double lat) {
       List<Zone> zones=findByStatus(ZoneStatus.ACTIVE);
       List<Zone> nearbyZones = new ArrayList<>();
       Iterator iterator=zones.iterator();
       while (iterator.hasNext()) {
           Zone zones1 = (Zone) iterator.next();
           Double lat1 = zones1.getLat();
           Double lon1 = zones1.getLon();
           int R = 6371; // Radius of the earth in km
           double dLat = (lat - lat1) * (Math.PI / 180);  // deg2rad below
           double dLon = (lon - lon1) * (Math.PI / 180);
           double a =
                   Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                           Math.cos((lat1) * (Math.PI / 180)) * Math.cos((lat) * (Math.PI / 180)) *
                                   Math.sin(dLon / 2) * Math.sin(dLon / 2);
           double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
           double d = R * c; // Distance in km
           System.out.println("Distance " + d);
           // calculate the result
           if (d <= 1) {
               if (vehicleManagementService.findByZone(zones1.getId(), 0).size() > 0) {
                   nearbyZones.add(zones1);
                   //System.out.println(c*r);
               }
           }
       }
       return nearbyZones;
   }

    @Override
    public List<Zone> findByStatus(ZoneStatus status, int page) {
        List<Zone> zones = zoneRepository.findByStatus(status,new PageRequest(page,9)).getContent();
        return zones;
    }

    @Override
    public List<Zone> findByStatus(ZoneStatus status) {
        return zoneRepository.findByStatus(status).getContent();
    }

    @Override
    public Zone findZoneBySupervisorId(String supervisorId) {
        return zoneRepository.findZoneBySupervisorId(supervisorId);
    }
}

/**
 *  Service Class for Zones
 */

// Package
package in.stackroute.umove.zoneservice.service.impl;

// Importing files
import in.stackroute.umove.zoneservice.exception.ZoneAlreadyExistException;
import in.stackroute.umove.zoneservice.exception.ZoneNotFoundException;
import in.stackroute.umove.zoneservice.exception.ZonesNotFoundException;
import in.stackroute.umove.zoneservice.model.Zone;
import in.stackroute.umove.zoneservice.model.ZoneStatus;
import in.stackroute.umove.zoneservice.repository.ZoneRepository;
import in.stackroute.umove.zoneservice.service.ServiceZone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

@Service
public class ServiceZoneImpl implements ServiceZone {


    @Autowired
    private ZoneRepository zoneRepository;

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
        zoneRepository.save(zone);
        return zone;
    }

    // Zone service for getting all zones
    @Override
    public List<Zone> findAllZones() {
        List<Zone> zone = zoneRepository.findAll();
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
    public List<Zone> findZonesByLocality(String locality) {
        List<Zone> zones = zoneRepository.findZonesByLocality(locality);
        if(zones.isEmpty()) {
            throw new ZonesNotFoundException("No data found");
        }
        return zones;
    }

    // Zone service for updating zones according to zone name
    @Override
    public Zone updateZoneDetails(String name, Zone zone) {
        Zone zoneModel = zoneRepository.findByName(name);
        if(zoneModel != null){
            if(zone.getName() != null){
                zoneModel.setName(zone.getName());
            }
            if(zone.getStatus() != null){
                zoneModel.setStatus(zone.getStatus());
            }
            if(zone.getCapacity()!= 0){
                zoneModel.setCapacity(zone.getCapacity()  );
            }
            if(zone.getPincode()!= null){
                zoneModel.setPincode(zone.getPincode()  );
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
            if(zone.getSupervisorEmail() != null){
                zoneModel.setSupervisorEmail(zone.getSupervisorEmail());
            }
            zoneModel.setTime(new Date());
            return zoneRepository.save(zoneModel);
        }

        else
            throw new ZonesNotFoundException("No data found");

    }

    // Zone service for getting nearby zones
    @Override
    public List<Zone> getNearbyZones(Double lon, Double lat) {
        List<Zone> zones=zoneRepository.findAll();
        List<Zone> nearbyZones = new ArrayList<>();
        Iterator iterator=zones.iterator();
        while (iterator.hasNext()){
            Zone zones1= (Zone) iterator.next();
            Double lat1=zones1.getLat();
            Double lon1=zones1.getLon();
            lon1 = Math.toRadians(lon1);
            lon = Math.toRadians(lon);
            lat1 = Math.toRadians(lat1);
            lat = Math.toRadians(lat);
            // Haversine formula
            double dlon = lon - lon1;
            double dlat = lat - lat1;
            double value1 = Math.pow(Math.sin(dlat / 2), 2)
                    + Math.cos(lat1) * Math.cos(lat)
                    * Math.pow(Math.sin(dlon / 2),2);
            double value2 = 2 * Math.asin(Math.sqrt(value1));
            double value3 = 6371;

            System.out.println(value2*value3);
            // calculate the result
            if ((value2*value3)<=4000){
                nearbyZones.add(zones1);
                //System.out.println(c*r);
            }
        }
        return nearbyZones;
    }

    @Override
    public List<Zone> findByStatus(ZoneStatus status) {
        List<Zone> zones = zoneRepository.findByStatus(status);
        return zones;
    }

    @Override
    public Zone findZoneBySupervisorId(String supervisorId) {
        return zoneRepository.findZoneBySupervisorId(supervisorId);
    }
}

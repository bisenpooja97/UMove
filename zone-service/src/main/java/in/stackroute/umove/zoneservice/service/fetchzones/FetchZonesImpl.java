package in.stackroute.umove.zoneservice.service.fetchzones;

import in.stackroute.umove.zoneservice.model.Zones;
import in.stackroute.umove.zoneservice.repository.ZoneRepository;
import in.stackroute.umove.zoneservice.service.Service;
import javassist.bytecode.Descriptor;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Iterator;
import java.util.List;
@org.springframework.stereotype.Service
public class FetchZonesImpl implements Service {

    @Autowired
    private ZoneRepository zoneRepository;

    @Override
    public List<Zones> getNearbyZones(Double lon, Double lat) {
        List<Zones> zones=zoneRepository.findAll();
        List<Zones> nearbyZones = null;
        Iterator iterator=zones.iterator();
        while (iterator.hasNext()){
            Zones zones1= (Zones) iterator.next();
            Double lat1=zones1.getLat();
            Double lon1=zones1.getLon();
            double theta = lon1 - lon;
            double dist = Math.sin(Math.toRadians(lat1)) * Math.sin(Math.toRadians(lat)) + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat)) * Math.cos(Math.toRadians(theta));
            dist = Math.acos(dist);
            dist = Math.toDegrees(dist);
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;
            if (dist<=1){
                nearbyZones.add(zones1);
            }
        }
        return nearbyZones;
    }
}

package in.stackroute.umove.zoneservice.service.impl;

import in.stackroute.umove.zoneservice.exception.ZonesNotFoundException;
import in.stackroute.umove.zoneservice.model.ZoneTypeCount;
import in.stackroute.umove.zoneservice.repository.ZoneTypeCountRepo;
import in.stackroute.umove.zoneservice.service.ServiceZoneTypeCount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZoneTypeCountImpl implements ServiceZoneTypeCount {

    @Autowired
    ZoneTypeCountRepo repo;

    @Override
    public List<ZoneTypeCount> findAllTypeCount() {
        List<ZoneTypeCount> zoneTypeCounts = repo.findAll();
        return zoneTypeCounts;
    }

    @Override
    public ZoneTypeCount getZoneType(String zoneId, String typeId) {
        ZoneTypeCount zoneTypeCount = repo.findZoneType(zoneId, typeId);
        return zoneTypeCount;
    }

    @Override
    public ZoneTypeCount create(ZoneTypeCount zoneTypeCount) {
        repo.save(zoneTypeCount);
        return zoneTypeCount;
    }

    @Override
    public ZoneTypeCount updateCount(String zoneId, String typeId, ZoneTypeCount zoneTypeCount) {
        ZoneTypeCount zone = repo.findZoneType(zoneId, typeId);
        if (zone != null) {
            if (zoneTypeCount.getCount() != 0) {
                zone.setCount(zoneTypeCount.getCount());
            }
            return repo.save(zone);
        }  else
            throw new ZonesNotFoundException("No data found");
    }

    @Override
    public ZoneTypeCount bookingConfirmed(String zoneId, String typeId) {
        ZoneTypeCount typeList = repo.findZoneType(zoneId, typeId);
        if(typeList != null) {
            if(typeList.getCount() <= 0) {
                return null;
            } else  {
                typeList.setCount(typeList.getCount() - 1);
                return repo.save(typeList);
            }
        } else {
            return null;
        }
    }
}

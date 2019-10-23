package in.stackroute.umove.zoneservice.service;

import in.stackroute.umove.zoneservice.model.ZoneTypeCount;

import java.util.List;

public interface ServiceZoneTypeCount {

    ZoneTypeCount getZoneType(String zoneId, String typeId);
    ZoneTypeCount create(ZoneTypeCount zoneTypeCount);
    ZoneTypeCount updateCount(String zoneId, String typeId, ZoneTypeCount zoneTypeCount);
    List<ZoneTypeCount> findAllTypeCount();
}

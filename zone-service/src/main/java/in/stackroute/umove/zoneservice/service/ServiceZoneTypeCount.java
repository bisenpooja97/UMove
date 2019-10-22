package in.stackroute.umove.zoneservice.service;

import in.stackroute.umove.zoneservice.model.ZoneTypeCount;

public interface ServiceZoneTypeCount {

    ZoneTypeCount getZoneType(String zoneId, String typeId);
    ZoneTypeCount create(ZoneTypeCount zoneTypeCount);
    ZoneTypeCount updateCount(String zoneId, String typeId, ZoneTypeCount zoneTypeCount);
}

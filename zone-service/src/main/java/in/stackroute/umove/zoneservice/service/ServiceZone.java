package in.stackroute.umove.zoneservice.service;

import in.stackroute.umove.zoneservice.model.Zones;

import java.util.List;

public interface ServiceZone {
    public void addNewZone(Zones zone);
    public List<Zones> findAllZones();
}

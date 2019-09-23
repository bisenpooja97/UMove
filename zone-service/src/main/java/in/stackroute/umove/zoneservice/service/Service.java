package in.stackroute.umove.zoneservice.service;

import in.stackroute.umove.zoneservice.model.Zones;

import java.util.List;

public interface Service {
 List<Zones> getNearbyZones(Double lon,Double lat) ;
}

package in.stackroute.umove.zoneservice.service;


import in.stackroute.umove.zoneservice.model.Fuel;

import java.util.List;

public interface ServiceFuel {
    public Fuel addFuel(Fuel fuel);
    public List<Fuel> find();
    public Fuel updateFuelDetails(String name, Fuel fuel);
    public Fuel findName(String name);
}

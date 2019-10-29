package in.stackroute.umove.vehicleservice.service;

import in.stackroute.umove.vehicleservice.model.Fuel;

import java.util.List;

public interface ServiceFuel {
    public Fuel addFuel(Fuel fuel);
    public List<Fuel> find(int page);
    public Fuel updateFuelDetails(String name, Fuel fuel);
    public Fuel findName(String name);
}

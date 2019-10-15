package in.stackroute.umove.vehicleservice.service;


import in.stackroute.umove.vehicleservice.model.Vehicle;
import in.stackroute.umove.vehicleservice.model.VehicleStatus;

import java.util.List;

public interface ServiceVehicle {
    public Vehicle addVehicle(Vehicle vehicle);
    public List<Vehicle> find();
    public Vehicle findByRegistrationNo(String id);
    public List<Vehicle> findByZone(String zone_id);
    public Vehicle updateVehicleDetails(String name, Vehicle vehicle);
    public List<Vehicle> findByType(String name);
    public List<Vehicle> findByZoneAndType(String zone,String type);
    public List<Vehicle> findByStatus(VehicleStatus status);
}
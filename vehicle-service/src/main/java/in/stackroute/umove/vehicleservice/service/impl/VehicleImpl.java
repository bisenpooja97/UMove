package in.stackroute.umove.vehicleservice.service.impl;

import in.stackroute.umove.vehicleservice.exception.RegistrationNoAlreadyExistException;
import in.stackroute.umove.vehicleservice.model.Status;
import in.stackroute.umove.vehicleservice.model.Vehicle;
import in.stackroute.umove.vehicleservice.repository.VehicleRepo;
import in.stackroute.umove.vehicleservice.service.ServiceVehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service

public class VehicleImpl implements ServiceVehicle {
    @Autowired
    VehicleRepo repo;
    //To add new vehicle
    @Override
    public Vehicle addVehicle(Vehicle vehicle) {
        List<Vehicle> vehicleList=repo.findByRegistrationNo(vehicle.getRegistrationNo());
        if(vehicleList.size()>0){
            throw new RegistrationNoAlreadyExistException("Vehicle already exists");
        }

        repo.save(vehicle);
        return vehicle;

    }

    //To find data of all vehicles
    public List<Vehicle> find() {
        return repo.findAll();
    }


    //Find vehicles based on zone
    @Override
    public List<Vehicle> findByZone(String zone_id) {
        List<Vehicle> vehicleList=repo.findByzoneid(zone_id);
        return vehicleList;
    }

    //To update the details of vehicles
    public Vehicle updateVehicleDetails(String name, Vehicle vehicle) {
        Vehicle vehicleList = repo.findByregistrationNo(name);
        if(vehicleList != null){
            if(vehicle.getInsuranceNo() != null){
                vehicleList.setInsuranceNo(vehicle.getInsuranceNo());
            }
            if(vehicle.getStatus() != null){
                vehicleList.setStatus(vehicle.getStatus());
            }
            if(vehicle.getLastServiceDate()!= null){
                vehicleList.setLastServiceDate(vehicle.getLastServiceDate()  );
            }
            if(vehicle.getZoneid() != null){
                vehicleList.setZoneid(vehicle.getZoneid());
            }
            if(vehicle.getType() != null){
                vehicleList.setType(vehicle.getType());
            }
            if(vehicle.getVehiclePurchased() != null){
                vehicleList.setVehiclePurchased(vehicle.getVehiclePurchased());
            }

            vehicleList.setTime(new Date());
            return repo.save(vehicleList);
        }
        else
            return null;
    }

    //Find vehicles based on type name
    public List<Vehicle> findByType(String name){
        List<Vehicle> v=repo.findByType(name);
        System.out.println("retrieved vehicles type" + v);
        return v;

    }

    //Find vehicles based on zone and type

    public List<Vehicle> findByZoneAndType(String zone,String type){
        List<Vehicle> v=repo.findByZoneType(zone,type);
        System.out.println("retrieved vehicles of zone with type" + v);
        return v;
    }

    @Override
    public List<Vehicle> findByStatus(Status status) {
        List<Vehicle> vehicles=repo.findByStatus(status);
        return vehicles;
    }

    //To find vehicles based on Registartion No
    @Override
    public Vehicle findByRegistrationNo(String id){
        return repo.findByregistrationNo(id);
    }




}





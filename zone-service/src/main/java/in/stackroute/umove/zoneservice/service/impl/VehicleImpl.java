package in.stackroute.umove.zoneservice.service.impl;

import in.stackroute.umove.zoneservice.exception.ChassisNoAlreadyExistException;
import in.stackroute.umove.zoneservice.exception.InsuranceNoAlreadyExistException;
import in.stackroute.umove.zoneservice.exception.RegistrationNoAlreadyExistException;
import in.stackroute.umove.zoneservice.model.Vehicle;
import in.stackroute.umove.zoneservice.model.VehicleStatus;
import in.stackroute.umove.zoneservice.model.VehicleType;
import in.stackroute.umove.zoneservice.model.ZoneTypeCount;
import in.stackroute.umove.zoneservice.repository.VehicleRepo;
import in.stackroute.umove.zoneservice.repository.VehicleTypeRepo;
import in.stackroute.umove.zoneservice.service.ServiceVehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
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
        Vehicle vehicleList=repo.findByregistrationNoIgnoreCase(vehicle.getRegistrationNo());
        if(vehicleList != null){
            throw new RegistrationNoAlreadyExistException("Vehicle already exists");
        }
        Vehicle vehicleList1=repo.findByChassisNumberIgnoreCase(vehicle.getChassisNumber());
        if(vehicleList1 != null){
            throw new ChassisNoAlreadyExistException("Vehicle already exists");
        }
        Vehicle vehicleList2=repo.findByInsuranceNoIgnoreCase(vehicle.getInsuranceNo());
        if(vehicleList2 != null){
            throw new InsuranceNoAlreadyExistException("Vehicle already exists");
        }


        repo.save(vehicle);
        return vehicle;

    }

    //To find data of all vehicles
    public List<Vehicle> find(int page) {
        return repo.findAll(new PageRequest(page,12)).getContent();
    }


    //Find vehicles based on zone
    @Override
    public List<Vehicle> findByZone(String zone_id,int page) {
        List<Vehicle> vehicleList=repo.findByzoneId(zone_id,new PageRequest(page,12)).getContent();
        return vehicleList;
    }

    //To update the details of vehicles
    public Vehicle updateVehicleDetails(String name, Vehicle vehicle) {
        Vehicle vehicleList = repo.findByregistrationNoIgnoreCase(name);
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
            if(vehicle.getZoneId() != null){
                vehicleList.setZoneId(vehicle.getZoneId());
            }
            if(vehicle.getVehicleType() != null){
                vehicleList.setVehicleType(vehicle.getVehicleType());
            }
            if(vehicle.getPurchasedDate() != null){
                vehicleList.setPurchasedDate(vehicle.getPurchasedDate());
            }

            return repo.save(vehicleList);
        }
        else
            return null;
    }

    //Find vehicles based on type name
    public List<Vehicle> findByType(String name,int page){
        List<Vehicle> v=repo.findByType(name,new PageRequest(page,12)).getContent();
        System.out.println("retrieved vehicles type" + v);
        return v;

    }

    //Find vehicles based on zone and type

    public List<Vehicle> findByZoneAndType(String zone,String type,int page){
        List<Vehicle> v=repo.findByZoneType(zone,type,new PageRequest(page,12)).getContent();
        System.out.println("retrieved vehicles of zone with type" + v);
        return v;
    }

    @Override
    public List<Vehicle> findByStatus(VehicleStatus status,int page) {
        List<Vehicle> vehicles=repo.findByStatus(status,new PageRequest(page,100)).getContent();
        return vehicles;
    }


    //To find vehicles based on Registartion No
    @Override
    public Vehicle findByRegistrationNo(String id){
        return repo.findByregistrationNoIgnoreCase(id);
    }
}

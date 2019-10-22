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
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service

public class VehicleImpl implements ServiceVehicle {
    @Autowired
    VehicleRepo repo;

    @Autowired
    ZoneTypeCountImpl repo1;

    @Autowired
    VehicleTypeRepo repo2;
    //To add new vehicle
    @Override
    public Vehicle addVehicle(Vehicle vehicle) {
        Vehicle vehicleList=repo.findByregistrationNo(vehicle.getRegistrationNo());
        if(vehicleList != null){
            throw new RegistrationNoAlreadyExistException("Vehicle already exists");
        }
        Vehicle vehicleList1=repo.findByChassisNumber(vehicle.getChassisNumber());
        if(vehicleList1 != null){
            throw new ChassisNoAlreadyExistException("Vehicle already exists");
        }
        Vehicle vehicleList2=repo.findByInsuranceNo(vehicle.getInsuranceNo());
        if(vehicleList2 != null){
            throw new InsuranceNoAlreadyExistException("Vehicle already exists");
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
//                Vehicle vehicleList2=repo.findByInsuranceNo(vehicle.getInsuranceNo());
//                if(vehicleList2 != null){
//                    throw new InsuranceNoAlreadyExistException("Vehicle already exists");
//                }
                vehicleList.setInsuranceNo(vehicle.getInsuranceNo());
            }
            if(vehicle.getStatus() != null){
                vehicleList.setStatus(vehicle.getStatus());
            }
            if(vehicle.getLastServiceDate()!= null){
//                Date date1=vehicleList.getLastServiceDate();
//                Date date2= vehicleList.getVehiclePurchased();
//                if(date1.compareTo(date2)<0)
//                {
//                    throw new LastServiceDateWrongException("Vehicle already exists");
//                }
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
    public List<Vehicle> findByStatus(VehicleStatus status) {
        List<Vehicle> vehicles=repo.findByStatus(status);
        return vehicles;
    }


    //To find vehicles based on Registartion No
    @Override
    public Vehicle findByRegistrationNo(String id){
        return repo.findByregistrationNo(id);
    }




}

package in.stackroute.umove.zoneservice.service.impl;

import in.stackroute.umove.zoneservice.exception.FuelNameAlreadyExistException;
import in.stackroute.umove.zoneservice.model.Fuel;
import in.stackroute.umove.zoneservice.repository.FuelRepo;
import in.stackroute.umove.zoneservice.service.ServiceFuel;
import in.stackroute.umove.zoneservice.service.ServiceVehicleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceFuelImpl implements ServiceFuel {
    @Autowired
    FuelRepo repo;

    @Autowired
    ServiceVehicleType serviceVehicleType;


    @Override
    public Fuel addFuel(Fuel fuel) {
        Fuel fuelList=repo.findByName(fuel.getName());
        if(fuelList != null){
            throw new FuelNameAlreadyExistException("Fuel Name already exists");
        }
        repo.save(fuel);
        return fuel;
    }

    @Override
    public List<Fuel> find() {
        return repo.findAll();
    }

    @Override
    public Fuel updateFuelDetails(String name, Fuel fuel) {
        Fuel fuelList = repo.findByName(name);
        if (fuelList != null) {
            if (fuel.getName() != null) {
                fuel.setName(fuel.getName());
            }

            if (fuel.getCostFuel() != 0)   {
                fuelList.setCostFuel(fuel.getCostFuel());
                repo.save(fuelList);
                System.out.println("Vehicles types for diesel cost");
                System.out.println(fuelList.getCostFuel());
                System.out.println(fuelList.getName());
                System.out.println("service" + serviceVehicleType);
                serviceVehicleType.updateEveryoneFare(fuelList.getCostFuel(),fuelList.getName());
            }

            return repo.save(fuelList);


        }
        return null;
    }

    @Override
    public Fuel findName(String name) {
        Fuel fuelList=repo.findByName(name);
        return fuelList;
    }


}

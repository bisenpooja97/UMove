package in.stackroute.umove.zoneservice.service.impl;

import in.stackroute.umove.zoneservice.exception.FuelNameAlreadyExistException;
import in.stackroute.umove.zoneservice.model.Fuel;
import in.stackroute.umove.zoneservice.repository.FuelRepo;
import in.stackroute.umove.zoneservice.service.ServiceFuel;
import in.stackroute.umove.zoneservice.service.ServiceVehicleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
        Fuel fuelList=repo.findByNameIgnoreCase(fuel.getName());
        if(fuelList != null){
            throw new FuelNameAlreadyExistException("Fuel Name already exists");
        }
        repo.save(fuel);
        return fuel;
    }

    @Override
    public List<Fuel> find(int page) {
        //List<Fuel> list= new ArrayList<>();
        List<Fuel> list=repo.findAll(new PageRequest(page,1000)).getContent();
        // List<Fuel> list =  repo.findAllByName(page);
        //List<Fuel> list=repo.findAll(page);
        return list;
    }

    @Override
    public Fuel updateFuelDetails(String name, Fuel fuel) {
        Fuel fuelList = repo.findByNameIgnoreCase(name);
        if (fuelList != null) {
            if (fuel.getName() != null) {
                fuel.setName(fuel.getName());
            }

            if (fuel.getFuelCost() != 0)   {
                fuelList.setFuelCost(fuel.getFuelCost());
                repo.save(fuelList);
                serviceVehicleType.updateEveryoneFare(fuelList.getFuelCost(),fuelList.getName());
            }

            return repo.save(fuelList);


        }
        return null;
    }




    @Override
    public Fuel findName(String name) {
        Fuel fuelList=repo.findByNameIgnoreCase(name);
        return fuelList;
    }




}

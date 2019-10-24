package in.stackroute.umove.vehicleservice.service.impl;

import in.stackroute.umove.vehicleservice.exception.TypeAlreadyExistException;
import in.stackroute.umove.vehicleservice.exception.TypeNotFoundException;
import in.stackroute.umove.vehicleservice.model.Fuel;
import in.stackroute.umove.vehicleservice.model.VehicleType;
import in.stackroute.umove.vehicleservice.repository.FuelRepo;
import in.stackroute.umove.vehicleservice.repository.VehicleTypeRepo;
import in.stackroute.umove.vehicleservice.service.ServiceVehicleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VehicleTypeImpl implements ServiceVehicleType {
    @Autowired
    VehicleTypeRepo repo;
    FuelRepo fuelRepo;
    //To add new type
    @Override

    public  VehicleType addType(VehicleType type) {
        VehicleType typeList=repo.findByNameIgnoreCase(type.getName());
        if(typeList != null){
            throw new TypeAlreadyExistException("Type already exists");
        }

     float a=  type.getFuel().getFuelCost();
        float b= type.getMileage();
        type.setCostPerKm(a/b);
        repo.save(type);
        return type;

    }

    //To get details of all type
    public List<VehicleType> find(int page) {
        return repo.findAll(new PageRequest(page,100)).getContent();
    }

    //To get vehicle type by fuel type
    public List<VehicleType> findVehicleTypeByFuel(String fuel) {
        return repo.findAll()
                .stream()
                .filter(type -> type.getFuel()
                        .getName()
                        .equalsIgnoreCase(fuel))
                .collect(Collectors.toList());

    }

    //To find the details of a type by name
    @Override
    public VehicleType findName(String name) {
        VehicleType typeList=repo.findByNameIgnoreCase(name);
        return typeList;
    }



    //To find a type based on it's id
    public VehicleType findByVid(String id) {
        return repo.findByid(id);
    }

    //To update details based of type
    public VehicleType updateTypeDetails(String name, VehicleType type) {
        VehicleType typeList = repo.findByNameIgnoreCase(name);
        if (typeList != null) {
            if (type.getName() != null) {
                typeList.setName(type.getName());
            }

            if (type.getCostPerKm() != 0) {
                typeList.setCostPerKm(type.getCostPerKm());
            }
            if (type.getCostPerMin() != 0) {
                typeList.setCostPerMin(type.getCostPerMin());
            }
            if(type.getUrl() != null){
                typeList.setUrl(type.getUrl());
            }
            if(type.getVehicleCC() != null){
                typeList.setVehicleCC(type.getVehicleCC());
            }
            if(type.getMileage() != 0){
                typeList.setMileage(type.getMileage());
            }
            if(type.getBaseFare() != 0){
                typeList.setBaseFare(type.getBaseFare());
            }
            return repo.save(typeList);


        }

        return null;

    }

    //To store image in local system

    @Override
    public void saveImage(MultipartFile imageFile, String uid) throws Exception {

        String fileName = "/home/dikshi/umove/vehicle-service/src/main/resources/" + uid + ".jpg";
        Path filePath = Paths.get(fileName);
        Files.createDirectories(filePath.getParent());

        try (
                final BufferedWriter out = Files.newBufferedWriter(
                        filePath,
                        StandardCharsets.UTF_8,
                        StandardOpenOption.CREATE,
                        StandardOpenOption.APPEND)
        ) {
            out.write(String.valueOf(imageFile.getBytes()));
        } catch (NoSuchFieldError e) {
            e.printStackTrace();
        }

    }



    @Override
    public void updateEveryoneFare(float fare,String name){
        System.out.println("The fare is + ");
        System.out.println(fare);
        System.out.println(name);
       List<VehicleType> vehicleLists=findVehicleTypeByFuel(name);
        //list.stream().forEach(elem -> System.out.println("element " + elem));
//       vehicleLists.stream().forEach(
//                elem -> elem.getKilometer()

        for ( VehicleType vehicle : vehicleLists){
            float a=vehicle.getMileage();
            float b=fare/a;
            vehicle.setMileage(b);
            updateTypeDetails(vehicle.getName(),vehicle);
        }








    }
}

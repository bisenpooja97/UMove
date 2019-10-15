package in.stackroute.umove.vehicleservice.service.impl;

import in.stackroute.umove.vehicleservice.exception.TypeAlreadyExistException;
import in.stackroute.umove.vehicleservice.exception.TypeNotFoundException;
import in.stackroute.umove.vehicleservice.model.VehicleType;
import in.stackroute.umove.vehicleservice.repository.VehicleTypeRepo;
import in.stackroute.umove.vehicleservice.service.ServiceVehicleType;
import org.springframework.beans.factory.annotation.Autowired;
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

@Service
public class VehicleTypeImpl implements ServiceVehicleType {
    @Autowired
    VehicleTypeRepo repo;
    //To add new type
    @Override

    public  VehicleType addType(VehicleType type) {
        List<VehicleType> typeList=repo.findByname(type.getName());
        if(typeList.size()>0){
            throw new TypeAlreadyExistException("Type already exists");
        }
        type.setCostlt(100);
        float b=type.getKilometer();
        float c=type.getCostlt()/b;
        if(type.getCategory().name()=="Sports"){
            type.setCostkm(c+5);
        }
        if(type.getCategory().name()=="Cruiser"){
            type.setCostkm(c+3);
        }
        if(type.getCategory().name()=="Touring"){
            type.setCostkm(c+2);
        }
        if(type.getCategory().name()=="Standard"){
            type.setCostkm(c+4);
        }
        if(type.getCategory().name()=="Dual_Purpose"){
            type.setCostkm(c+4);
        }
        if(type.getCategory().name()=="Dirt_Bikes"){
            type.setCostkm(c+4);
        }
        repo.save(type);
        return type;

    }

    //To get details of all type
    public List<VehicleType> find() {
        return repo.findAll();
    }

    //To find the details of a type by name
    @Override
    public VehicleType findName(String name) {
        VehicleType typeList=repo.findByName(name);
        return typeList;
    }



    //To find a type based on it's id
    public VehicleType findByVid(String id) {
        return repo.findByid(id);
    }

    //To update details based of type
    public VehicleType updateTypeDetails(String name, VehicleType type) {
        VehicleType typeList = repo.findByName(name);
        if (typeList != null) {
            if (type.getName() != null) {
                typeList.setName(type.getName());
            }

            if (type.getCostkm() != 0) {
                typeList.setCostkm(type.getCostkm());
            }
            if (type.getCosttime() != 0) {
                typeList.setCosttime(type.getCosttime());
            }
            if(type.getUrl() != null){
                typeList.setUrl(type.getUrl());
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
}

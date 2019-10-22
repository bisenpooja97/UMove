package in.stackroute.umove.vehicleservice.service;

import in.stackroute.umove.vehicleservice.model.VehicleType;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ServiceVehicleType {
    public VehicleType addType(VehicleType type);
    public List<VehicleType> find();
    public VehicleType findName(String name);
    public VehicleType findByVid(String id);
    public VehicleType updateTypeDetails(String name, VehicleType type);
    void saveImage(MultipartFile imageFile, String _uid) throws Exception;
    public void updateEveryoneFare(float fare,String name);
    public List<VehicleType> findVehicleTypeByFuel(String fuel);
}

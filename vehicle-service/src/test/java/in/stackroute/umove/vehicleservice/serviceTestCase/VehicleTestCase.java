package in.stackroute.umove.vehicleservice.serviceTestCase;
import in.stackroute.umove.vehicleservice.model.Vehicle;
import in.stackroute.umove.vehicleservice.repository.VehicleRepo;
import in.stackroute.umove.vehicleservice.service.ServiceVehicle;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

public class VehicleTestCase {
    @Autowired
    private ServiceVehicle serviceVehicle;


    @MockBean
    private VehicleRepo vehicleRepo;


    @Test
    public  void getVehiclesTest(){
        when(vehicleRepo.findAll()).thenReturn(Stream.of(new Vehicle("1","1","1")).collect(Collectors.toList()));
        assertEquals(1,serviceVehicle.find().size());

    }

    @Test
    public void addVehicleTest(){
        Vehicle vehicle=new Vehicle("a","a","1");
        when(vehicleRepo.save(vehicle)).thenReturn(vehicle);
        assertEquals(vehicle,serviceVehicle.addVehicle(vehicle));
    }

    @Test
    public void getVehicleByZone(){
        String zone="1";
        when(vehicleRepo.findByzoneid(zone)).thenReturn(Stream.of(new Vehicle("1","1","1")).collect(Collectors.toList()));
        assertEquals(1,serviceVehicle.findByZone("1").size());

    }


//    @Test
//    public void getVehicleByRegistrationNumber(){
//        String registrationNo="1";
//        when(vehicleRepo.findByregistrationNo(registrationNo)).thenReturn(Stream.of(new Vehicle("1","1","1")).collect(Collectors.toList()));
//        assertEquals(1,serviceVehicle.findByZone("1").size());
//
//    }


}

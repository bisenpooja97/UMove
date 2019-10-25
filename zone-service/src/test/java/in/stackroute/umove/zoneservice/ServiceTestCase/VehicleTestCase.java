package in.stackroute.umove.zoneservice.ServiceTestCase;

import in.stackroute.umove.zoneservice.model.Vehicle;
import in.stackroute.umove.zoneservice.repository.VehicleRepo;
import in.stackroute.umove.zoneservice.service.ServiceVehicle;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageRequest;

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
        assertEquals(1,serviceVehicle.find(1).size());

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

        when(vehicleRepo.findByzoneId(zone,new PageRequest(1,12)).getContent()).thenReturn(Stream.of(new Vehicle("1","1","1")).collect(Collectors.toList()));
        assertEquals(1,serviceVehicle.findByZone("1",1).size());

    }


}

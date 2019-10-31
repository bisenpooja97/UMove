package in.stackroute.umove.vehicleservice.serviceTestCase;

import in.stackroute.umove.vehicleservice.model.Fuel;
import in.stackroute.umove.vehicleservice.repository.FuelRepo;
import in.stackroute.umove.vehicleservice.service.ServiceFuel;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;


import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

public class FuelTestCase {
    @Autowired
    private ServiceFuel serviceFuel;


    @MockBean
    private FuelRepo fuelRepo;

    @Test
    public  void getFuelTest(){
        when(fuelRepo.findAll()).thenReturn(Stream.of(new Fuel("1","petrol",2.3F)).collect(Collectors.toList()));
        assertEquals(1,serviceFuel.find(2).size());
    }

    @Test
    public void addFuelTest(){
        Fuel fuel=new Fuel("1","petrol",2.3F);
        assertEquals(fuel,serviceFuel.addFuel(fuel));
    }
}

package in.stackroute.umove.vehicleservice.serviceTestCase;

import in.stackroute.umove.vehicleservice.model.VehicleType;
import in.stackroute.umove.vehicleservice.repository.VehicleTypeRepo;
import in.stackroute.umove.vehicleservice.service.ServiceVehicleType;
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


@RunWith(SpringRunner.class)
@SpringBootTest
public class VehicleTypeTestCase {
    @Autowired
    private ServiceVehicleType serviceType;


    @MockBean
    private VehicleTypeRepo typeRepo;


    @Test
    public  void getTypesTest(){
        when(typeRepo.findAll()).thenReturn(Stream.of(new VehicleType("a",1,1)).collect(Collectors.toList()));
        assertEquals(1,serviceType.find().size());

    }
//    @Test
//    public void getTypeByName(){
//        String type="KTM";
//        when(typeRepo.findByName(type)).thenReturn(Stream.of(new VehicleType("KTM",1,1)).collect(Collectors.toList()));
//        assertEquals(1,serviceType.findName("KTM").size());
//    }

    @Test
    public void addTypeTest(){
        VehicleType type=new VehicleType("a",1,1);
        assertEquals(type,serviceType.addType(type));
    }



}



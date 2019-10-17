package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.*;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import org.bson.types.ObjectId;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import javax.swing.*;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RideServiceImpTest {

    @Autowired
    private RideServiceImp rideServiceImp;

    @MockBean
    private RideRepo rideRepo;

    @Test
    public  void getAllRidesTest(){
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        ride.setStatus("Confirmed");

        Rider rider = new Rider();
        rider.set_id("U1");
        rider.setName("khushal");
        rider.setEmail("khannakhushalkk@gmail.com");
        rider.setMobileNo("7569065907");
        ride.setRider(rider);

        Zone zone = new Zone();
        zone.setId("Z1");
        zone.setSupervisorId("S1");
        zone.setSupervisorName("Mohan");
        zone.setSupervisorEmail("Mohan@gmail.com");
        zone.setSupervisorContactNo("7654797655");
        zone.setLat(2.777777);
        zone.setLon(2.666666);
        zone.setLocality("Manyata");
        zone.setCity("Bangalore");
        zone.setState("karnataka");
        zone.setCountry("India");
        zone.setPincode(302017);

        Vehicle vehicle = new Vehicle();
        vehicle.set_id("V1");
        vehicle.setRegistrationNo("RJ14J10");
        vehicle.setName("Activa");
        vehicle.setCostkm(30.0);
        vehicle.setCosttime(4.0);
        vehicle.setImageUrl("vehclemage");

        PaymentDetail paymentDetail = new PaymentDetail();
        paymentDetail.setStatus("Paid");
        paymentDetail.setTotalAmount(100.0);
        paymentDetail.setTotalExtraCharges(100.0);
        paymentDetail.setFuelRefillAmount(100.0);
        paymentDetail.setRideAmount(100.0);
        ExtraCharge extraCharge = new ExtraCharge();
        extraCharge.setChargedFor("Helmet");
        extraCharge.setAmount(100.0);
        //paymentDetail.setExtraCharges(extraCharge);


//        Mockito.when(rideRepo.findAll()).thenReturn(Stream.of(new Ride(object,"Confirmed",
//                        new Rider("U1","khushal","khannakhushalkk@gmail.com","7569065907"),
//                        new Zone("Z1","S1","Mohan","Mohan@gmail.com","7654797655",2.7723,2.2345,"manyata","Bangalore","karnataka","India",302017),
//                        new Zone("Z1","S1","Mohan","Mohan@gmail.com","7654797655",2.7723,2.2345,"manyata","Bangalore","karnataka","India",302017),
//                        new Vehicle("V1","RJ14J10", "Activa",10.0,5.0,"vimage"),
//                       new PaymentMethod("PM10","UPI","SBI"),"2019-10-15T11:39:38.358","2019-10-15T11:39:38.358","2019-10-15T11:39:38.358",30,20,
//                       new PaymentDetail("Paid",100.0,Stream.of(new ExtraCharge("helmet", 100.0)).collect(Collectors.toList()),100.0,200.0,100.0 ),
//                       new PromoCode("P1","Diwali",10,"D10"))).collect(Collectors.toList()));
//        Mockito.when(rideRepo.findAll()).thenReturn(Stream.of(new Ride()).collect(Collectors.toList()));
//        Mockito.assertEquals(1,rideServiceImp.getAllRides().size());
    }
//    @Test

}

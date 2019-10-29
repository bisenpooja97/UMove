package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.*;
import in.stackroute.umove.bookingservice.model.Configuration;
import in.stackroute.umove.bookingservice.repo.ConfigRepo;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import org.bson.types.ObjectId;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.*;

import java.lang.Exception;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RideServiceTests {

    @Autowired
    private RideService rideService;

    @MockBean
    private RideRepo rideRepo;

    @MockBean
    private ConfigRepo configRepo;


    //Test to check the start ride function of ride
    @Test
    public void startRideTest() throws Exception {
        String expected = "Started";
        String expectedVehicleNo = "MH1140";
        LocalDateTime rightNow = LocalDateTime.now();
        LocalDateTime beforeRightNow = rightNow.minusMinutes(10);
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        ride.setStatus(RideStatus.Confirmed);
        ride.setBookedAt(beforeRightNow);
        Vehicle vehicle = new Vehicle();
        vehicle.setRegistrationNo("MH1140");
        ride.setVehicle(vehicle);
        Mockito.when(rideRepo.findBy_id(new ObjectId("5d89c3cf651a913a1cf2d31e")))
                .thenReturn(ride);
        Configuration configuration = new Configuration();
        configuration.set_id(new ObjectId("5d89c3cf651a913a1cf2d387"));
        configuration.setName("autocancelTime");
        configuration.setValue(20);
        Mockito.when(configRepo.findByName("autocancelTime")).thenReturn(configuration);
        Ride rideDetails = rideService.startRide(new ObjectId("5d89c3cf651a913a1cf2d31e"), "MH1140");
        String actual = rideDetails.getStatus().toString();
        String actualVehicleNo = rideDetails.getVehicle().getRegistrationNo();
        assertEquals(actual, expected);
        assertEquals(actualVehicleNo, expectedVehicleNo);
    }

    //Test to check the start ride function for ride-autocancel case
    @Test
    public void startRideTestForAutocancel() throws Exception {
        String expected = "Auto_Cancelled";
        String expectedVehicleNo = "MH1140";
        LocalDateTime rightNow = LocalDateTime.now();
        LocalDateTime beforeRightNow = rightNow.minusMinutes(20);
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        ride.setStatus(RideStatus.Confirmed);
        ride.setBookedAt(beforeRightNow);
        Vehicle vehicle = new Vehicle();
        vehicle.setRegistrationNo("MH1140");
        ride.setVehicle(vehicle);
        Mockito.when(rideRepo.findBy_id(new ObjectId("5d89c3cf651a913a1cf2d31e")))
                .thenReturn(ride);
        Configuration configuration = new Configuration();
        configuration.set_id(new ObjectId("5d89c3cf651a913a1cf2d387"));
        configuration.setName("autocancelTime");
        configuration.setValue(10);
        Mockito.when(configRepo.findByName("autocancelTime")).thenReturn(configuration);
        Ride rideDetails = rideService.startRide(new ObjectId("5d89c3cf651a913a1cf2d31e"), "MH1140");
        String actual = rideDetails.getStatus().toString();
        String actualVehicleNo = rideDetails.getVehicle().getRegistrationNo();
        assertEquals(actual, expected);
        assertEquals(actualVehicleNo, expectedVehicleNo);
    }

    //Test to check the cancel ride function within threshold cancel time of booking
    @Test
    public void cancelRideBeforeThreshold() throws Exception {
        String expected = "CancelledWithinThreshold";
        LocalDateTime rightNow = LocalDateTime.now();
        LocalDateTime beforeRightNow = rightNow.minusMinutes(4);
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        ride.setStatus(RideStatus.Confirmed);
        ride.setBookedAt(beforeRightNow);
        Mockito.when(rideRepo.findBy_id(new ObjectId("5d89c3cf651a913a1cf2d31e")))
                .thenReturn(ride);
        Configuration configForAutocancel = new Configuration();
        configForAutocancel.set_id(new ObjectId("5d89c3cf651a913a1cf2d389"));
        configForAutocancel.setName("autocancelTime");
        configForAutocancel.setValue(10);
        Mockito.when(configRepo.findByName("autocancelTime")).thenReturn(configForAutocancel);
        Configuration configForCancel = new Configuration();
        configForCancel.set_id(new ObjectId("5d89c3cf651a913a1cf2d387"));
        configForCancel.setName("cancelThresholdTime");
        configForCancel.setValue(5);
        Mockito.when(configRepo.findByName("cancelThresholdTime")).thenReturn(configForCancel);
        Ride rideDetails = rideService.cancelRide(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        String actual = rideDetails.getStatus().toString();
        assertEquals(actual, expected);
    }

    //Test to check the cancel ride function within threshold cancel time of booking
    @Test
    public void cancelRideAfterThreshold() throws Exception {
        String expectedStatus = "CancelledAfterThreshold";
        Double expectedRideAmount = 50.0;
        LocalDateTime rightNow = LocalDateTime.now();
        LocalDateTime beforeRightNow = rightNow.minusMinutes(8);
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        ride.setStatus(RideStatus.Confirmed);
        ride.setBookedAt(beforeRightNow);
        Vehicle vehicle = new Vehicle();
        VehicleType vehicleType = new VehicleType();
        vehicleType.setBaseFare(50);
        vehicle.setVehicleType(vehicleType);
        ride.setVehicle(vehicle);
        PaymentDetail paymentDetail = new PaymentDetail();
        paymentDetail.setRideAmount(0.0);
        ride.setPaymentDetail(paymentDetail);
        Mockito.when(rideRepo.findBy_id(new ObjectId("5d89c3cf651a913a1cf2d31e")))
                .thenReturn(ride);
        Configuration configForAutocancel = new Configuration();
        configForAutocancel.set_id(new ObjectId("5d89c3cf651a913a1cf2d389"));
        configForAutocancel.setName("autocancelTime");
        configForAutocancel.setValue(10);
        Mockito.when(configRepo.findByName("autocancelTime")).thenReturn(configForAutocancel);
        Configuration configForCancel = new Configuration();
        configForCancel.set_id(new ObjectId("5d89c3cf651a913a1cf2d387"));
        configForCancel.setName("cancelThresholdTime");
        configForCancel.setValue(5);
        Mockito.when(configRepo.findByName("cancelThresholdTime")).thenReturn(configForCancel);
        Ride rideDetails = rideService.cancelRide(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        String actualStatus = rideDetails.getStatus().toString();
        Double actualRideAmount = rideDetails.getPaymentDetail().getRideAmount();
        assertEquals(actualStatus, expectedStatus);
        assertEquals(actualRideAmount, expectedRideAmount);
    }

    @Test
    public void cancelRideTestForAutocancel() throws Exception {
        String expectedStatus = "Auto_Cancelled";
        Double expectedRideAmount = 50.0;
        LocalDateTime rightNow = LocalDateTime.now();
        LocalDateTime beforeRightNow = rightNow.minusMinutes(12);
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        ride.setStatus(RideStatus.Confirmed);
        ride.setBookedAt(beforeRightNow);
        Vehicle vehicle = new Vehicle();
        VehicleType vehicleType = new VehicleType();
        vehicleType.setBaseFare(50);
        vehicle.setVehicleType(vehicleType);
        ride.setVehicle(vehicle);
        PaymentDetail paymentDetail = new PaymentDetail();
        paymentDetail.setRideAmount(0.0);
        ride.setPaymentDetail(paymentDetail);
        Mockito.when(rideRepo.findBy_id(new ObjectId("5d89c3cf651a913a1cf2d31e")))
                .thenReturn(ride);
        Configuration configForAutocancel = new Configuration();
        configForAutocancel.set_id(new ObjectId("5d89c3cf651a913a1cf2d389"));
        configForAutocancel.setName("autocancelTime");
        configForAutocancel.setValue(10);
        Mockito.when(configRepo.findByName("autocancelTime")).thenReturn(configForAutocancel);
        Configuration configForCancel = new Configuration();
        configForCancel.set_id(new ObjectId("5d89c3cf651a913a1cf2d387"));
        configForCancel.setName("cancelThresholdTime");
        configForCancel.setValue(5);
        Mockito.when(configRepo.findByName("cancelThresholdTime")).thenReturn(configForCancel);
        Ride rideDetails = rideService.cancelRide(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        String actualStatus = rideDetails.getStatus().toString();
        Double actualRideAmount = rideDetails.getPaymentDetail().getRideAmount();
        assertEquals(actualStatus, expectedStatus);
        assertEquals(actualRideAmount, expectedRideAmount);
    }

    //Test to check the update destination function of a ride
    @Test
    public void updateDestinationTest() throws Exception {
        int expected = 1;
        List<Zone> Zones = new ArrayList<>();
        Zone destinationZoneTwo = new Zone();
        destinationZoneTwo.setId("77");
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        ride.setStatus(RideStatus.Started);
        ride.setDestinationZones(Zones);
        Mockito.when(rideRepo.findBy_id(new ObjectId("5d89c3cf651a913a1cf2d31e")))
                .thenReturn(ride);
        Ride rideDetails = rideService.updateDestination(destinationZoneTwo, new ObjectId("5d89c3cf651a913a1cf2d31e"));
        int actual = rideDetails.getDestinationZones().size();
        assertEquals(actual, expected);
    }

}

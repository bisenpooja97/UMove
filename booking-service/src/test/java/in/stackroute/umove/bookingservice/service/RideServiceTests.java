package in.stackroute.umove.bookingservice.service;

import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.model.Vehicle;
import in.stackroute.umove.bookingservice.model.Zone;
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

    //Test to check the start ride function of ride
    @Test
    public void startRideTest() throws Exception {
        String expected = "started";
        String expectedVehicleNo = "MH1140";
        LocalDateTime rightNow = LocalDateTime.now();
        LocalDateTime beforeRightNow = rightNow.minusMinutes(10);
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        ride.setStatus("Confirmed");
        ride.setBookedAt(beforeRightNow);
        Vehicle vehicle = new Vehicle();
        vehicle.setRegistrationNo("MH1140");
        ride.setVehicle(vehicle);
        Mockito.when(rideRepo.findBy_id(new ObjectId("5d89c3cf651a913a1cf2d31e")))
                .thenReturn(ride);
        Ride rideDetails = rideService.startRide(new ObjectId("5d89c3cf651a913a1cf2d31e"),"MH1140");
        String actual = rideDetails.getStatus();
        String actualVehicleNo = rideDetails.getVehicle().getRegistrationNo();
        assertEquals(actual, expected);
        assertEquals(actualVehicleNo, expectedVehicleNo);
    }

    //Test to check the autocancel time of ride
    @Test
    public void autocancelRideTest() throws Exception {
        String expected = "autocancelled";
        LocalDateTime rightNow = LocalDateTime.now();
        LocalDateTime beforeRightNow = rightNow.minusMinutes(20);
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        ride.setStatus("Confirmed");
        ride.setBookedAt(beforeRightNow);
        Mockito.when(rideRepo.findBy_id(new ObjectId("5d89c3cf651a913a1cf2d31e")))
                .thenReturn(ride);
        Ride rideDetails = rideService.autocancelRide(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        String actual = rideDetails.getStatus();
        assertEquals(actual, expected);
    }

    //Test to check the cancel ride function within 5 minutes of booking
    @Test
    public void cancelRideBeforeFiveMinutes() throws Exception {
        String expected = "cancelled before 5 mins";
        LocalDateTime rightNow = LocalDateTime.now();
        LocalDateTime beforeRightNow = rightNow.minusMinutes(4);
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        ride.setStatus("Confirmed");
        ride.setBookedAt(beforeRightNow);
        Mockito.when(rideRepo.findBy_id(new ObjectId("5d89c3cf651a913a1cf2d31e")))
                .thenReturn(ride);
        Ride bookingDetails = rideService.cancelRide(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        String actual = bookingDetails.getStatus();
        assertEquals(actual, expected);
    }

    //Test to check the cancel ride function after 5 minutes of booking
    @Test
    public void cancelRideAfterFiveMinutes() throws Exception {
        String expected = "cancelled after 5 mins";
        LocalDateTime rightNow = LocalDateTime.now();
        LocalDateTime beforeRightNow = rightNow.minusMinutes(10);
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        ride.setStatus("Confirmed");
        ride.setBookedAt(beforeRightNow);
        Mockito.when(rideRepo.findBy_id(new ObjectId("5d89c3cf651a913a1cf2d31e")))
                .thenReturn(ride);
        Ride rideDetails = rideService.cancelRide(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        String actual = rideDetails.getStatus();
        assertEquals(actual, expected);
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
        ride.setStatus("started");
        ride.setDestinationZones(Zones);
        Mockito.when(rideRepo.findBy_id(new ObjectId("5d89c3cf651a913a1cf2d31e")))
                .thenReturn(ride);
        Ride rideDetails = rideService.updateDestination(destinationZoneTwo, new ObjectId("5d89c3cf651a913a1cf2d31e"));
        int actual = rideDetails.getDestinationZones().size();
        assertEquals(actual, expected);
    }

}

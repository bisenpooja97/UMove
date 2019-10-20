package in.stackroute.umove.bookingservice.service;
import in.stackroute.umove.bookingservice.model.*;
import in.stackroute.umove.bookingservice.repo.PaymentRepo;
import in.stackroute.umove.bookingservice.repo.RideRepo;
import org.bson.types.ObjectId;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RideServiceImpTest {

    @Autowired
    RideService rideService;
    @MockBean
    RideRepo rideRepo;
    @MockBean
    PaymentRepo paymentRepo;



    @Test
    public void confirmRide() {
    }

    @Test
    public void getAllRides() {
    }

    @Test
    public void getRideById() {
    }

    @Test
    public void payForRide() {
    }

    @Test
    public void getPaymentDetails() {
    }
}

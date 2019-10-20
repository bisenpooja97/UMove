package in.stackroute.umove.bookingservice.controller;


import in.stackroute.umove.bookingservice.service.RideServiceImp;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@WebMvcTest(value = RideController.class, secure = false)
public class RideControllerTest {

    @Autowired
    MockMvc mockMvc;
    @Autowired
    RideServiceImp rideServiceImp;

    @Test
    public void confirmBooking() {
    }

    @Test
    public void getBookings() {
    }

    @Test
    public void getBookingById() {
    }

    @Test
    public void payForBooking() {
    }

    @Test
    public void getPaymentDetails() {
    }
}

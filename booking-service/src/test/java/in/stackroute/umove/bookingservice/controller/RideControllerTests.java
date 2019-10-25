package in.stackroute.umove.bookingservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import in.stackroute.umove.bookingservice.model.Ride;
import in.stackroute.umove.bookingservice.model.RideStatus;
import in.stackroute.umove.bookingservice.model.Vehicle;
import in.stackroute.umove.bookingservice.model.Zone;
import in.stackroute.umove.bookingservice.service.RideService;
import org.bson.types.ObjectId;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.BDDMockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(RideController.class)
public class RideControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RideService rideService;

    //Test to check api end point for starting a ride
    @Test
    public void startRideRequestTest() throws Exception {
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        Vehicle vehicle = new Vehicle();
        vehicle.setRegistrationNo("MH1140");
        ride.setVehicle(vehicle);
        BDDMockito.given(rideService.startRide(new ObjectId("5d89c3cf651a913a1cf2d31e"), "MH1140")).willReturn(ride);
        mockMvc.perform(MockMvcRequestBuilders.patch("/api/v1/rides/5d89c3cf651a913a1cf2d31e/start?vehicleNumber=MH1140")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    //Test to check api end point for cancelling a ride
    @Test
    public void cancelRideRequestTest() throws Exception {
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        BDDMockito.given(rideService.cancelRide(new ObjectId("5d89c3cf651a913a1cf2d31e"))).willReturn(ride);
        mockMvc.perform(MockMvcRequestBuilders.patch("/api/v1/rides/5d89c3cf651a913a1cf2d31e/cancel")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    //Test to check api end point for changing destination of a ride
    @Test
    public void changeDestinationTest() throws Exception {
        Zone destination = new Zone();
        destination.setId("888");
        Ride ride = new Ride();
        ride.set_id(new ObjectId("5d89c3cf651a913a1cf2d31e"));
        ride.setStatus(RideStatus.Started);
        BDDMockito.given(rideService.updateDestination(destination, new ObjectId("5d89c3cf651a913a1cf2d31e"))).willReturn(ride);
        mockMvc.perform(MockMvcRequestBuilders.patch("/api/v1/rides/5d89c3cf651a913a1cf2d31e/changeDestination")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(destination)))
                .andExpect(status().isOk());
    }

    private static String jsonToString(final Object ob) throws JsonProcessingException {
        String result;
        try {
            ObjectMapper mapper = new ObjectMapper();
            String jsonContent = mapper.writeValueAsString(ob);
            result = jsonContent;
        } catch(JsonProcessingException e) {
            result = "JSON processing error";
        }
        return result;
    }

}

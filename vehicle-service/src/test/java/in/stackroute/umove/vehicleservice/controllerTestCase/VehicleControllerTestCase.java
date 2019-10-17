package in.stackroute.umove.vehicleservice.controllerTestCase;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import in.stackroute.umove.vehicleservice.controller.VehicleController;
import in.stackroute.umove.vehicleservice.model.Vehicle;
import in.stackroute.umove.vehicleservice.service.ServiceVehicle;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(VehicleController.class)
public class VehicleControllerTestCase {
    @MockBean
    private ServiceVehicle serviceVehicle;
    private MockMvc mockMvc;
    private Vehicle vehicle;
    @InjectMocks
    private VehicleController vehicleController;
    private List<Vehicle> vehicleList;
    @Before
    public void setUp() throws Exception {
        vehicleList = new ArrayList<Vehicle>();
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(vehicleController).build();
        vehicle = new Vehicle("a","a","a");
        vehicleList.add(vehicle);
    }
    @After
    public void tearDown() throws Exception {

    }
    @Test
    public void testSaveVehicle() throws Exception {
        when(serviceVehicle.addVehicle(vehicle)).thenReturn(vehicle);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/vehicles")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(vehicle)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void testSaveEventFail() throws Exception {
        when(serviceVehicle.addVehicle(vehicle)).thenReturn(vehicle);
        mockMvc.perform(MockMvcRequestBuilders.post("/apir/v1/vehicles")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(vehicle)))
                .andExpect(MockMvcResultMatchers.status().is4xxClientError())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void testUpdateVehicle() throws Exception {
        when(serviceVehicle.updateVehicleDetails(vehicle.getRegistrationNo(),vehicle)).thenReturn(vehicle);
        mockMvc.perform(patch("/api/v1/vehicles/{registrationNo}",vehicle.getRegistrationNo())
                .contentType(MediaType.APPLICATION_JSON).
                        content(jsonToString(vehicle)))
                .andExpect(status().isOk())
                .andDo(print());
    }


    @Test
    public void testUpdateVehicleFail() throws Exception {
        when(serviceVehicle.updateVehicleDetails(vehicle.getRegistrationNo(),vehicle)).thenReturn(vehicle);
        mockMvc.perform(patch("/api/v1/vehiclesss/{name}",vehicle.getRegistrationNo())
                .contentType(MediaType.APPLICATION_JSON).
                        content(jsonToString(vehicle)))
                .andExpect(status().is4xxClientError())
                .andDo(print());
    }

    @Test
    public void getAllVehicle() throws Exception{
        when(serviceVehicle.find()).thenReturn(vehicleList);
        mockMvc.perform(get("/api/v1/vehicles")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(vehicle)))
                .andExpect(status().isOk())
                .andDo(print());
    }



    @Test
    public void getAllTypeByRegistrationNoFail() throws Exception{
        when(serviceVehicle.find()).thenReturn(vehicleList);
        mockMvc.perform(get("/api/v1/typse/{name}",vehicle.getRegistrationNo())
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(vehicle)))
                .andExpect(status().is4xxClientError())
                .andDo(print());
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




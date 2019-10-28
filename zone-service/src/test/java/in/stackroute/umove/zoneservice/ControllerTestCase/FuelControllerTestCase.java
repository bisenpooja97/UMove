package in.stackroute.umove.zoneservice.ControllerTestCase;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import in.stackroute.umove.zoneservice.controller.FuelController;
import in.stackroute.umove.zoneservice.model.Fuel;
import in.stackroute.umove.zoneservice.service.ServiceFuel;
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
@WebMvcTest(FuelController.class)
public class FuelControllerTestCase {
    @MockBean
    private ServiceFuel serviceFuel;
    private MockMvc mockMvc;
    private Fuel fuel;
    @InjectMocks
    private FuelController fuelController;
    private List<Fuel> fuelList;
    @Before
    public void setUp() throws Exception {
        fuelList = new ArrayList<Fuel>();
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(fuelController).build();
        fuel = new Fuel("1","Petrol",5F);
        fuelList.add(fuel);
    }
    @After
    public void tearDown() throws Exception {

    }
    @Test
    public void testSaveVehicle() throws Exception {
        when(serviceFuel.addFuel(fuel)).thenReturn(fuel);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/fuel")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(fuel)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void testSaveVehicleFail() throws Exception {
        when(serviceFuel.addFuel(fuel)).thenReturn(fuel);
        mockMvc.perform(MockMvcRequestBuilders.post("/apir/v1/fuel")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(fuel)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void testUpdateVehicle() throws Exception {
        when(serviceFuel.updateFuelDetails(fuel.getName(),fuel)).thenReturn(fuel);
        mockMvc.perform(patch("/api/v1/fuel/{name}",fuel.getName())
                .contentType(MediaType.APPLICATION_JSON).
                        content(jsonToString(fuel)))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void testUpdateVehicleFail() throws Exception {
        when(serviceFuel.updateFuelDetails(fuel.getName(),fuel)).thenReturn(fuel);
        mockMvc.perform(patch("/apir/v1/fuel/{name}",fuel.getName())
                .contentType(MediaType.APPLICATION_JSON).
                        content(jsonToString(fuel)))
                .andExpect(status().isOk())
                .andDo(print());
    }

//    @Test
//    public void getAllVehicle() throws Exception{
//        when(serviceFuel.find(2)).thenReturn(fuelList);
//        mockMvc.perform(get("/api/v1/fuel")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsonToString(fuel)))
//                .andExpect(status().isOk())
//                .andDo(print());
//    }

//
//    @Test
//    public void getAllVehicleFail() throws Exception{
//        when(serviceFuel.find(2)).thenReturn(fuelList);
//        mockMvc.perform(get("/apir/v1/fuel")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsonToString(fuel)))
//                .andExpect(status().isOk())
//                .andDo(print());
//    }




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

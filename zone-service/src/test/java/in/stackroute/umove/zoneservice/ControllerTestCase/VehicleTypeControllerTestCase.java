package in.stackroute.umove.zoneservice.ControllerTestCase;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import in.stackroute.umove.zoneservice.controller.VehicleTypeController;
import in.stackroute.umove.zoneservice.model.VehicleType;
import in.stackroute.umove.zoneservice.service.ServiceVehicleType;
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
@WebMvcTest(VehicleTypeController.class)
public class VehicleTypeControllerTestCase {
    @MockBean
    private ServiceVehicleType serviceType;
    private MockMvc mockMvc;
    private VehicleType type;
    @InjectMocks
    private VehicleTypeController typeController;
    private List<VehicleType> typeList;
    @Before
    public void setUp() throws Exception {
        typeList = new ArrayList<VehicleType>();
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(typeController).build();
        type = new VehicleType("a",1,1);
        typeList.add(type);
    }
    @After
    public void tearDown() throws Exception {

    }
    @Test
    public void testSaveType() throws Exception {
        when(serviceType.addType(type)).thenReturn(type);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/types")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(type)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(MockMvcResultHandlers.print());
    }


    @Test
    public void testSaveTypeFail() throws Exception {
        when(serviceType.addType(type)).thenReturn(type);
        mockMvc.perform(MockMvcRequestBuilders.post("/apir/v1/types")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(type)))
                .andExpect(MockMvcResultMatchers.status().is4xxClientError())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void testUpdatetype() throws Exception {
        when(serviceType.updateTypeDetails(type.getName(),type)).thenReturn(type);
        mockMvc.perform(patch("/api/v1/types/{name}",type.getName())
                .contentType(MediaType.APPLICATION_JSON).
                        content(jsonToString(type)))
                .andExpect(status().isOk())
                .andDo(print());
    }


    @Test
    public void testUpdatetypeFail() throws Exception {
        when(serviceType.updateTypeDetails(type.getName(),type)).thenReturn(type);
        mockMvc.perform(patch("/api/v1/tyspes/{name}",type.getName())
                .contentType(MediaType.APPLICATION_JSON).
                        content(jsonToString(type)))
                .andExpect(status().is4xxClientError())
                .andDo(print());
    }

    @Test
    public void getAllType() throws Exception{
        when(serviceType.find()).thenReturn(typeList);
        mockMvc.perform(get("/api/v1/types")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(type)))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getAllTypeByName() throws Exception{
        when(serviceType.find()).thenReturn(typeList);
        mockMvc.perform(get("/api/v1/types?name={name}",type.getName())
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(type)))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getAllTypeByNameFail() throws Exception{
        when(serviceType.find()).thenReturn(typeList);
        mockMvc.perform(get("/api/v1/typse/{name}",type.getName())
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(type)))
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

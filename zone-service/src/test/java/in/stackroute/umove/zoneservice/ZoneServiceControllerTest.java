package in.stackroute.umove.zoneservice;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import in.stackroute.umove.zoneservice.controller.ZoneController;
import in.stackroute.umove.zoneservice.model.Zone;
import in.stackroute.umove.zoneservice.model.ZoneStatus;
import in.stackroute.umove.zoneservice.service.impl.ServiceZoneImpl;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.BDDMockito;
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
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@RunWith(SpringRunner.class)
@WebMvcTest(ZoneController.class)
public class ZoneServiceControllerTest {
    @MockBean
    private ServiceZoneImpl serviceZone;

    private MockMvc mockMvc;
    private Zone zone;
    @InjectMocks
    private ZoneController zoneController;
    private List<Zone> zoneList;

    @Before
    public void setUp() throws Exception {
        zoneList = new ArrayList<>();
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(zoneController).build();
        zone = new Zone("Zone-1", 128.23, 23.87,
                "Bangalore", "Karnataka", "India", "560034", "Koramangala",
                10, "1", "Bherulal", "3434352525",
                "Bherulal@gmail.com", ZoneStatus.ACTIVE);
        zoneList.add(zone);
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void testSaveZone() throws Exception {
        when(serviceZone.addNewZone(zone)).thenReturn(zone);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/zones")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(zone)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(MockMvcResultHandlers.print());
    }


    @Test
    public void testSaveEventFail() throws Exception {
        when(serviceZone.addNewZone(zone)).thenReturn(zone);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/zones")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(zone)))
                .andExpect(MockMvcResultMatchers.status().is4xxClientError())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getAllZones() throws Exception {
        when(serviceZone.findAllZones()).thenReturn(zoneList);
        mockMvc.perform(get("/api/v1/zones")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(zone)))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void getAllZonesFail() throws Exception {
        when(serviceZone.findAllZones()).thenReturn(zoneList);
        mockMvc.perform(get("/api/v1/zones")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(zone)))
                .andExpect(status().is4xxClientError())
                .andDo(print());
    }

    private static String jsonToString(final Object object) throws JsonProcessingException {
        String result;
        try {
            ObjectMapper mapper = new ObjectMapper();
            String jsonContent = mapper.writeValueAsString(object);
            result = jsonContent;
        } catch (JsonProcessingException jsonProcessing) {
            result = "JSON processing error";
        }
        return result;
    }


    @Test
    public void getNearbyZonesTest() throws Exception {
        double lon = 12.9336081;
        double lan = 77.6144932;
        String url = "/api/v1/zones/nearby?lon=" + lon + "&lat=" + lan;
        List<Zone> zones = serviceZone.getNearbyZones(12.9336081, 77.6144932);
        BDDMockito.given(serviceZone.getNearbyZones(12.9336081, 77.6144932)).willReturn(zones);
        mockMvc.perform(MockMvcRequestBuilders.get(url)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(0)));
    }
}

package in.stackroute.umove.zoneservice;
import in.stackroute.umove.zoneservice.model.Zone;
import in.stackroute.umove.zoneservice.model.ZoneStatus;
import in.stackroute.umove.zoneservice.repository.ZoneRepository;
import in.stackroute.umove.zoneservice.service.serviceInterface.ServiceZone;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ZoneServiceApplicationTests {

	@Autowired
	private ServiceZone serviceZone;

	@MockBean
	private ZoneRepository zoneRepository;

	@Test
	public void getZonesTest(){
		when(zoneRepository.findAll()).thenReturn((List<Zone>) Stream.of(new Zone("Zone-1", 128.23,23.87,
				"Bangalore", "Karnataka", "India", "560034", "Koramangala",
				10, "1", "Bherulal", "3434352525",
				"Bherulal@gmail.com", ZoneStatus.ACTIVE)).collect(Collectors.toList())
		);
	}

	@Test
	public void getZoneByName(){
		String zoneName = "Zone-2";
		when(zoneRepository.findZoneByName(zoneName)).thenReturn((List<Zone>) Stream.of(new Zone("Zone-2", 128.23,23.87,
				"Bangalore", "Karnataka", "India", "560034", "Koramangala",
				10, "1", "Bherulal", "3434352525",
				"Bherulal@gmail.com", ZoneStatus.ACTIVE)).collect(Collectors.toList())
		);
		assertEquals(1, serviceZone.findByZoneName("Zone-2").size());
	}

	@Test
	public void getZoneByLocality(){
		String locality = "Koramangala";
		when(zoneRepository.findZonesByLocality(locality)).thenReturn((List<Zone>) Stream.of(new Zone("Zone-2", 128.23,23.87,
				"Bangalore", "Karnataka", "India", "560034", "Koramangala",
				10, "1", "Bherulal", "3434352525",
				"Bherulal@gmail.com", ZoneStatus.ACTIVE)).collect(Collectors.toList())
		);
		assertEquals(1, serviceZone.findZonesByLocality("Koramangala").size());
	}

	@Test
	public void addZoneTest(){
		Zone zone= new Zone("Zone-2", 128.23,23.87,
				"Bangalore", "Karnataka", "India", "560034", "Koramangala",
				10, "1", "Bherulal", "3434352525",
				"Bherulal@gmail.com", ZoneStatus.ACTIVE);
		assertEquals(zone,serviceZone.addNewZone(zone));
	}

}

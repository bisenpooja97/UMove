package in.stackroute.umove.zoneservice.seeder;

import in.stackroute.umove.zoneservice.model.Zones;
import in.stackroute.umove.zoneservice.repository.ZoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

public class DummyData implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private ZoneRepository zoneRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {

        Zones zone = new Zones("Zone-1", 12.9336081,77.6144932, "Bangalore", "Karnataka", "India",
                560034, "Koramangala", 10, 1, "Bherulal",
                "9196768866", "Bherulal@gmail.com");
        zoneRepository.save(zone);

    }
}

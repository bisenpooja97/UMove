package in.stackroute.umove.campaignservice.seeder;

import in.stackroute.umove.campaignservice.model.Campaign;
import in.stackroute.umove.campaignservice.repository.CampaignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

public class SeedCommandLineRunner implements CommandLineRunner {
    @Autowired
    private CampaignRepository campaignRepository;


    @Override
    public void run(String... args) throws Exception {

//        Campaign campaign=new Campaign("25% Off On Bike Rides","To increase the number of users","1-10-2019","16-10-2019","25OFF",25);
//        campaignRepository.save(campaign);


    }
}

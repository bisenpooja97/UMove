package in.stackroute.umove.campaignservice.seeder;

import in.stackroute.umove.campaignservice.model.Campaign;
import in.stackroute.umove.campaignservice.model.CampaignStatus;
import in.stackroute.umove.campaignservice.repository.CampaignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import java.time.LocalDate;

public class SeedCommandLineRunner implements CommandLineRunner {
    @Autowired
    private CampaignRepository campaignRepository;

//    LocalDate date1= LocalDate.now();
//    LocalDate date2= LocalDate.now().plusDays(7);

    @Override
    public void run(String... args) throws Exception {
//                Campaign campaign=new Campaign
//                ("SBI credit card","To increase the number of credit card users for SBI",
//                        date1,date2,"OCT100",25);
//        campaignRepository.save(campaign);
               Campaign campaign=new Campaign("25% Off On Bike Rides","To increase the number of users","23-10-2019","30-10-2019","30-10-2019","25OFF",25,200,0,100,50,0, CampaignStatus.Created);
        campaignRepository.save(campaign);

    }
}

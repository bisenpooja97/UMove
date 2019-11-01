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
//               Campaign campaign=new
//                       Campaign("First free ride upto rupees 100","To increase onboarding rate by 50% in 1 month","23-10-2019","30-10-2019","30-10-2019","FREE_RIDES",20,100,0,,50,100,"IN_PROGRESS");
//        campaignRepository.save(campaign);

    }
}

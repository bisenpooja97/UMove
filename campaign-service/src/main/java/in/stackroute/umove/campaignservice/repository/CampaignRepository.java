package in.stackroute.umove.campaignservice.repository;

import in.stackroute.umove.campaignservice.model.Campaign;
import in.stackroute.umove.campaignservice.model.CampaignStatus;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CampaignRepository extends MongoRepository<Campaign,Object> {

    Campaign findById(String id);

    Campaign getById(String id);

    List<Campaign> findByCampaignStatus(CampaignStatus campaignStatus);

    List<Campaign> findByName(String name);
}

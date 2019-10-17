package in.stackroute.umove.campaignservice.repository;

import in.stackroute.umove.campaignservice.model.Campaign;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CampaignRepository extends MongoRepository<Campaign,Object> {

    Campaign findByid(String id);
}

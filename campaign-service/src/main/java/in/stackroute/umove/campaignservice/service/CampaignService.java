package in.stackroute.umove.campaignservice.service;

import in.stackroute.umove.campaignservice.model.Campaign;
import org.bson.types.ObjectId;

import java.util.List;


public interface CampaignService {
    List<Campaign> getCampaignList();
    Campaign addUser(Campaign campaign);
    Campaign deleteCampaign(String id);
}

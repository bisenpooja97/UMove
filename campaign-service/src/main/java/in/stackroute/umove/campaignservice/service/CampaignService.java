package in.stackroute.umove.campaignservice.service;

import in.stackroute.umove.campaignservice.model.Campaign;
import in.stackroute.umove.campaignservice.model.CampaignStatus;

import java.util.List;

public interface CampaignService
{
    List<Campaign> getCampaignList();

    Campaign addCampaign(Campaign campaign);

    Campaign updateCampaign(String id, Campaign campaign);

    Campaign deleteCampaign(String id);

    Campaign getById(String id);

    List<Campaign> findByName(String name);

    List<Campaign> findByCampaignStatus(CampaignStatus campaignStatus);
}

package in.stackroute.umove.campaignservice.service;

import in.stackroute.umove.campaignservice.model.Campaign;

import java.util.List;

public interface CampaignService
{
    List<Campaign> getCampaignList();

    Campaign addCampaign(Campaign campaign);

    Campaign updateCampaign(String id, Campaign campaign);

    Campaign deleteCampaign(String id);

}

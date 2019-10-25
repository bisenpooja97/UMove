package in.stackroute.umove.campaignservice.service.Implementation;

import in.stackroute.umove.campaignservice.model.Campaign;
import in.stackroute.umove.campaignservice.repository.CampaignRepository;
import in.stackroute.umove.campaignservice.service.CampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CampaignserviceImpl implements CampaignService
{

    @Autowired
    private CampaignRepository campaignRepository;

    /*
     *Method to get campaign list
     */

    @Override
    public List<Campaign> getCampaignList()
    {
        return campaignRepository.findAll();
    }
    /*
     *Method to add campaign
     */


    @Override
    public Campaign addCampaign(Campaign campaign) {
        return campaignRepository.save(campaign);
    }
    /*
     *Method to update campaign
     */

    @Override
    public Campaign updateCampaign(String id, Campaign campaign)
    {
        Campaign updatedCampaign = campaignRepository.findById(id);
        if (updatedCampaign != null) {
            if (campaign.getName() != null) {
                updatedCampaign.setName(campaign.getName());
            }
            if (campaign.getObjective()!= null) {
                updatedCampaign.setObjective(campaign.getObjective());
            }
            if (campaign.getStartDate() != null) {
                updatedCampaign.setStartDate(campaign.getStartDate());
            }
            if (campaign.getEndDate()!= null) {
                updatedCampaign.setEndDate(campaign.getEndDate());
            }
            if (campaign.getPromocode() != null) {
                updatedCampaign.setPromocode(campaign.getPromocode());
            }
            if(campaign.getDiscountPercent() != 0){
                updatedCampaign.setDiscountPercent(campaign.getDiscountPercent());
            }
            return campaignRepository.save(updatedCampaign);
        }
        return null;
    }

    /**
     *  Method to delete campaign
     */

    @Override
    public Campaign deleteCampaign(String id)
    {
        Campaign campaign=campaignRepository.findById(id);
        campaignRepository.delete(campaign);
        return campaign;
    }

}

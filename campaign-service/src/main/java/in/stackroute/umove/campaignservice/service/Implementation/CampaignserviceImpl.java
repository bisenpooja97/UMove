package in.stackroute.umove.campaignservice.service.Implementation;

import in.stackroute.umove.campaignservice.model.Campaign;
import in.stackroute.umove.campaignservice.model.CampaignStatus;
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

            campaign.setMaximumLimit(campaign.getMaxDiscountAmount()*campaign.getTargetCustomers());
            campaign.setCampaignStatus(CampaignStatus.CREATED);
//System.out.println("m service m hu");

            campaignRepository.save(campaign);
            campaign.setEndDate(campaign.getExpiryDate());
            System.out.println(" get expiry date "+campaign.getExpiryDate());
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

            if (campaign.getExpiryDate()!= null) {
                updatedCampaign.setExpiryDate(campaign.getExpiryDate());
            }
            if (campaign.getCampaignStatus()!= null) {
                updatedCampaign.setCampaignStatus(campaign.getCampaignStatus());
            }

            if (campaign.getPromocode() != null) {
                updatedCampaign.setPromocode(campaign.getPromocode());
            }
            if(campaign.getDiscountPercent() != 0){
                updatedCampaign.setDiscountPercent(campaign.getDiscountPercent());
            }
            if(campaign.getMaximumLimit()!=0) {
                updatedCampaign.setMaximumLimit(campaign.getTargetCustomers()*campaign.getMaxDiscountAmount());
            }
            if(campaign.getTargetCustomers()!=0) {
                updatedCampaign.setTargetCustomers(campaign.getTargetCustomers());
            }
            if(campaign.getAchievedCustomers()!=0){
                updatedCampaign.setAchievedCustomers(campaign.getAchievedCustomers());
            }
            if(campaign.getTotalCoupons()!=0){
                updatedCampaign.setTotalCoupons(campaign.getTotalCoupons()-campaign.getUsedCoupons());
            }
            if(campaign.getUsedCoupons()!=0){
                updatedCampaign.setUsedCoupons(campaign.getUsedCoupons()+1);
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

    @Override
    public Campaign getById(String id) {
        return campaignRepository.getById(id);
    }

    @Override
    public List<Campaign> findByName(String name) {
        List<Campaign> campaigns = campaignRepository.findByName(name);
      return campaigns;
    }

    @Override
    public List<Campaign> findByCampaignStatus(CampaignStatus campaignStatus) {
        List<Campaign> campaigns = campaignRepository.findByCampaignStatus(campaignStatus);
        return campaigns;
    }


    @Override
    public Boolean validateCampaign(String campaignId) {
         Campaign campaign=campaignRepository.findById(campaignId);
         if (campaign.getTotalCoupons()-campaign.getUsedCoupons()>0){
             campaign.setUsedCoupons(campaign.getUsedCoupons()+1);
             campaignRepository.save(campaign);
             return true;
         }
         else {
             return false;
         }
    }
}

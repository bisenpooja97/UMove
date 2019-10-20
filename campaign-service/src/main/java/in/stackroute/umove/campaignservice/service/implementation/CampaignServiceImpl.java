package in.stackroute.umove.campaignservice.service.implementation;

import in.stackroute.umove.campaignservice.model.Campaign;
import in.stackroute.umove.campaignservice.repository.CampaignRepository;
import in.stackroute.umove.campaignservice.service.CampaignService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CampaignServiceImpl implements CampaignService {
    @Autowired
    private CampaignRepository campaignRepository;
    @Override
    public List<Campaign> getCampaignList() {
        return campaignRepository.findAll();
    }
    @Override
    public Campaign addUser(Campaign campaign) {
        return campaignRepository.save(campaign);
    }

    @Override
    public Campaign deleteCampaign(String id) {
        Campaign campaign=campaignRepository.findById(id);
        campaignRepository.delete(campaign);
        return campaign;
    }
}

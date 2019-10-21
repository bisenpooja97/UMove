package in.stackroute.umove.campaignservice.controller;


import in.stackroute.umove.campaignservice.model.Campaign;
import in.stackroute.umove.campaignservice.service.CampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

//@CrossOrigin(origins = "http://localhost:8100")
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("api/v1")

public class CampaignController
{
    @Autowired
    private CampaignService campaignService;
    /**
     *
     * API endpoint for getting list of all the campaigns
     */
    @GetMapping("campaigns")
    public ResponseEntity<Map> getCampaigns()
    {
        List<Campaign> campaign = campaignService.getCampaignList();
        Map<String, Object> map = new TreeMap<>();
        map.put("data", campaign);
        map.put("count", campaign.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
    /**
     *
     * API endpoint for adding a new campaign
     */
    @PostMapping(path = "campaigns/addcampaign")
    public ResponseEntity<Map> addCampaign(@RequestBody Campaign campaign)
    {
        Campaign addCampaign = campaignService.addCampaign(campaign);
        Map<String , Object>map = new TreeMap<>();
        map.put("data", addCampaign);
        map.put("message","New campaign created");
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map,HttpStatus.OK);
    }
    /**
     *
     * API endpoint for updating campaign
     */
    @PatchMapping(path = "/campaigns/{id}")
    public Campaign updateCampaign(@PathVariable String id, @RequestBody Campaign campaign){
        return campaignService.updateCampaign(id,campaign);
    }
    /**
     *
     * API endpoint for deleting campaign
     */

    @DeleteMapping(path = "/campaigns/{id}")
    public ResponseEntity<Map> deleteCampaign(@PathVariable("id") String id)
    {
        Campaign deleteCampaign=campaignService.deleteCampaign(id);
        Map<String , Object> map = new TreeMap<>();
        map.put("data", deleteCampaign);
        map.put("message","Campaign deleted");
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map,HttpStatus.OK);
    }



}

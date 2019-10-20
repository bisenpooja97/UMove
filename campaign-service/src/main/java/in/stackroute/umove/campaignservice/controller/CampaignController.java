package in.stackroute.umove.campaignservice.controller;


import in.stackroute.umove.campaignservice.model.Campaign;
import in.stackroute.umove.campaignservice.service.CampaignService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

//@CrossOrigin(origins = "http://localhost:8100")
@RestController
@RequestMapping("api/v1")
public class CampaignController {

    @Autowired
    private CampaignService campaignService;

    //    @GetMapping("campaigns")
//    public ResponseEntity<Map> getCampaigns()
//    {
//        List<Campaign> campaign = campaignService.getCampaignList();
//        Map<String, Object> map = new TreeMap<>();
//        map.put("data", campaign);
//        map.put("count", campaign.size());
//        map.put("status", HttpStatus.OK);
//        return new ResponseEntity<>(map, HttpStatus.OK);
//    }
//    @GetMapping("campaigns")
//    public List<Campaign> getCampaigns()
//    {
//        List<Campaign> campaign = campaignService.getCampaignList();
//        return campaign;
//    }
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
    @DeleteMapping(path = "/campaigns/{id}")
    public ResponseEntity<Map> deleteCampaign(@PathVariable("id") String id)
    {
        Campaign deleteCampaign=campaignService.deleteCampaign(id);
        Map<String , Object>map = new TreeMap<>();
        map.put("data", deleteCampaign);
        map.put("message","Campaign deleted");
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map,HttpStatus.OK);
    }
//    @PostMapping(path = "/campaigns/addcampaign")
//    public Campaign addUser(@RequestBody Campaign campaign)
//    {
//        Campaign addedUser = campaignService.addUser(campaign);
//
//        return addedUser;
//    }
@PostMapping(path = "campaigns/addcampaign")
public ResponseEntity<Map> addCampaign(@RequestBody Campaign campaign) {
    Campaign addedCampaign = campaignService.addUser(campaign);
    Map<String, Object> map = new TreeMap<>();
    map.put("data", addedCampaign);
    map.put("status", HttpStatus.OK);
    return new ResponseEntity<>(map, HttpStatus.CREATED);
}

}

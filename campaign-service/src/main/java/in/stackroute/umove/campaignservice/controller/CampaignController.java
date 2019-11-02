package in.stackroute.umove.campaignservice.controller;


import in.stackroute.umove.campaignservice.model.Campaign;
import in.stackroute.umove.campaignservice.model.CampaignStatus;
import in.stackroute.umove.campaignservice.service.CampaignService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "http://localhost:8100")
@RequestMapping("api/v1")
public class CampaignController
{
    private final RabbitTemplate messagingTemplate;
    private static final Logger logger = LogManager.getLogger(CampaignController.class);

    @Autowired
    private CampaignService campaignService;
    @Autowired
    CampaignController( RabbitTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    /**
     *
     * API endpoint for getting list of all the campaigns
     */
    @GetMapping("campaigns")
    public ResponseEntity<Map> getCampaigns(@RequestParam(value = "name",
            required = false) String name,@RequestParam(value = "status",required = false) CampaignStatus campaignStatus)

    {
        List<Campaign> campaigns = campaignService.getCampaignList();

        if(name != null && !name.isEmpty()) {
            campaigns=campaignService.findByName(name);
        }
        if(campaignStatus!=null)
        {
            campaigns=campaignService.findByCampaignStatus(campaignStatus);
        }

        Map<String, Object> map = new TreeMap<>();
        map.put("data", campaigns);
        map.put("count", campaigns.size());
        map.put("status", HttpStatus.OK);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping("/campaigns/{id}")
    public ResponseEntity<Map> getUsersById(@PathVariable String id)
    {
        Campaign data = campaignService.getById(id);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", data);
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
        messagingTemplate.convertAndSend("campaign_exchange", "campaign_created", map);
        return new ResponseEntity<>(map,HttpStatus.OK);
    }
    /**
     *
     * API endpoint for updating campaign
     */
//    @PatchMapping(path = "/campaigns/{id}")
//    public ResponseEntity<Map> updateCampaign(@PathVariable String id, @RequestBody Campaign campaign){
//
//        Campaign updatecampaign = campaignService.updateCampaign(id,campaign);
//        Map<String , Object>map = new TreeMap<>();
//        map.put("data", updatecampaign);
//        map.put("message","Campaign updated");
//        map.put("status", HttpStatus.OK);
//        return new ResponseEntity<>(map,HttpStatus.OK);
//        return campaignService.updateCampaign(id,campaign);

    //}

    @PatchMapping(path = "/campaigns/{id}",consumes = {"application/json"})
    public ResponseEntity updateCampaign(@PathVariable String id, @RequestBody Campaign campaign){
        Campaign updateCampaign = campaignService.updateCampaign(id,campaign);
        Map<String, Object> map = new TreeMap<>();
        map.put("data", updateCampaign);
        map.put("status", HttpStatus.OK);
        map.put("message","Campaign updated");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PatchMapping(path="/validateCampaigns/{id}")
        public ResponseEntity validateCampaign(@PathVariable("id") String id){
        Boolean validateCampaign = campaignService.validateCampaign(id);
        Map<String, Object> map = new TreeMap<>();
        map.put("data",validateCampaign);
        map.put("status", HttpStatus.OK);
        map.put("message","Campaign validated");
        return new ResponseEntity<>(map, HttpStatus.OK);
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
        return new ResponseEntity<>(map, HttpStatus.OK);
    }


}

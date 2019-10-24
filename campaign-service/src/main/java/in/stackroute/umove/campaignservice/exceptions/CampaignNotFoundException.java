package in.stackroute.umove.campaignservice.exceptions;
/**
 * Throwing exception when campaign is not found
 *
 */

public class CampaignNotFoundException extends RuntimeException {
    public CampaignNotFoundException(String exception)
    {
        super(exception);
    }

}

package in.stackroute.umove.campaignservice.exceptions;
/**
 * Throwing exception when campaign already exists
 *
 */
public class CampaignAlreadyExistsException extends RuntimeException {

   public CampaignAlreadyExistsException(String exception){
       super(exception);
   }

}

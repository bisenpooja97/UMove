package in.stackroute.umove.campaignservice.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Campaign {

    private String id= UUID.randomUUID().toString().substring(30);
    private String name;
    private String objective;
    private String startDate;
    private String endDate;
    private String expiryDate;
    private String promocode;
    private int discountPercent;
    private int targetCustomers;
    private int achievedCustomers;
    private int maximumLimit;
    private int totalCoupons;
    private int maxDiscountAmount;
    private int usedCoupons;
    private CampaignStatus campaignStatus;

    public Campaign(String name, String objective, String startDate, String endDate, String expiryDate, String promocode, int discountPercent, int targetCustomers, int achievedCustomers, int maximumLimit, int totalCoupons, int maxDiscountAmount, int usedCoupons, CampaignStatus campaignStatus) {
        this.name = name;
        this.objective = objective;
        this.startDate = startDate;
        this.endDate = endDate;
        this.expiryDate = expiryDate;
        this.promocode = promocode;
        this.discountPercent = discountPercent;
        this.targetCustomers = targetCustomers;
        this.achievedCustomers = achievedCustomers;
        this.maximumLimit = maximumLimit;
        this.totalCoupons = totalCoupons;
        this.maxDiscountAmount = maxDiscountAmount;
        this.usedCoupons = usedCoupons;
        this.campaignStatus = campaignStatus;
    }

    //    public String get_id()
//    {
//        return _id.toHexString();
//    }
//
//    public void set_id(ObjectId _id)
//    {
//        this._id = _id;
//    }

}

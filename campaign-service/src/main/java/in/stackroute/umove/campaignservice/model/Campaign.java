package in.stackroute.umove.campaignservice.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Campaign {
    @Id
    private ObjectId _id;
    private String name;
    private String objective;
    private String startDate;
    private String endDate;
    private String promocode;
    private int discountPercent;

    public Campaign(String name, String objective, String startDate, String endDate, String promocode,int discountPercent) {
        this.name = name;
        this.objective = objective;
        this.startDate = startDate;
        this.endDate = endDate;
        this.promocode=promocode;
        this.discountPercent = discountPercent;
    }

    public String get_id()
    {
        return _id.toHexString();
    }

    public void set_id(ObjectId _id)
    {
        this._id = _id;
    }

}

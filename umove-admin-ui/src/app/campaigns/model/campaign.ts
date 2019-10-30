export class Campaign {
    public id: string;
    public name: string;
    public  objective: string;
    public startDate: Date;
    public  endDate: Date;
    public expiredDate: Date;
    public  promocode: string;
    public  discountPercent: number;
    public upperBound: number;
    public totalCoupons: number;
    public usedCoupons: number;
    public CampaignStatus: string;
 }
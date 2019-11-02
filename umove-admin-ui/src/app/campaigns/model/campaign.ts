export class Campaign {
    public id: string;
    public name: string;
    public objective: string;
    public startDate: Date;
    public endDate: Date;
    public expiryDate: Date;
    public promocode: string;
    public discountPercent: number;
    public targetCustomers: number;
    public achievedCustomers: number;
    public maximumLimit: number;
    public totalCoupons: number;
    public usedCoupons: number;
    public maxDiscountAmount: number;
    public campaignStatus: string;
 }
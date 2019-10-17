import {ExtraCharge} from './extra-charge';

export class Payment {
     status: string;
     discount: number;
     rideAmount: number;
     extraCharges: ExtraCharge[];
     totalAmount: number;
     totalExtraCharges: number;
     paidAmount: number;
 }

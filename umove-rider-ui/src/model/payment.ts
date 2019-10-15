import { ExtraCharges } from './extracharges';

export class Payment {
    status: string;
    discount: number;
    rideAmount: number;
    extraCharges: ExtraCharges[];
    totalAmount: number;
    totalExtraCharges: number;
    paidAmount: number;
    petrolCharges: number;
}

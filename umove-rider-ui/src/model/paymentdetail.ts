import { ExtraCharges } from './extracharges';


export class PaymentDetail {
  status: string;
  rideAmount: number;
  extraCharges: ExtraCharges[];
  totalAmount: number;
  totalExtraCharges: number;
  fuelRefillAmount: number;
}

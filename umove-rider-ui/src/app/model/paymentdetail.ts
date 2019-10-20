import { ExtraCharge } from './extra-charges';

export class PaymentDetail {
  status: string;
  rideAmount: number;
  extraCharges: ExtraCharge[];
  totalAmount: number;
  totalExtraCharges: number;
  fuelRefillAmount: number;
}

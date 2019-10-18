import { Vehicle } from './vehicle';
import { Zone } from './zone';
import { PaymentMethod } from './paymentmethod';
import { Rider } from './rider';
import { PaymentDetail } from './paymentdetail';
import { PromoCode } from './promocode';
import { Payment } from './payment';

export class Ride {
    _id: string;
    paymentDetail: PaymentDetail;
    payment: Payment;
    bookedAt: Date;
    status: string;
    vehicle: Vehicle;
    sourceZone: Zone;
    destinationZones: Zone[];
    paymentMethod: PaymentMethod;
    promocode: PromoCode;
    rider: Rider;
    distance: number;
    duration: number;
    rideStartAt: Date;
    rideEndAt: Date;
}

import { PaymentDetail } from './paymentdetail';
import { Vehicle } from './ vehicle';
import { Zone } from './zone';
import { PaymentMethod } from './paymentMethod';
import { PromoCode } from './promocode';
import { Rider } from './rider';

export class Ride {
    _id: string;
    paymentDetail: PaymentDetail;
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

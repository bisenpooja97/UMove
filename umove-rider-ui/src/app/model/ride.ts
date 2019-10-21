import { Vehicle } from './vehicle';
import { Zone } from './zone';
import { User } from './user';
import { Payment } from './payment';
import { PaymentMethod } from './payment-method';
import { Campaign } from './campaign';
import {PaymentDetail} from './paymentdetail';

export class Ride {
    // tslint:disable-next-line: variable-name
    _id: string;
    bookedAt: Date;
    status: string;
    vehicle: Vehicle;
    sourceZone: Zone;
    destinationZones: Zone[];
    paymentMethod: PaymentMethod;
    promocode: Campaign;
    rider: User;
    rideStartAt: Date;
    rideEndAt: Date;
    distance: number;
    duration: number;
    paymentDetail: PaymentDetail;
    payment: Payment;

}

import { Payment } from './payment';
import { Vehicle } from './vehicle';
import { Zone } from './zone';
import { Campaign } from './campaign';
import { User } from './user';
import { PaymentMethod } from './paymentmethod';
import { PaymentDetails } from './paymentdetail';

export class Ride {
    _id: string;
    payment: Payment;
    paymentDetail: PaymentDetails;
    bookedAt: Date;
    status: string;
    vehicle: Vehicle;
    sourceZone: Zone;
    destinationZones: Zone[];
    paymentMethod: PaymentMethod;
    promocode: Campaign;
    rider: User;
}

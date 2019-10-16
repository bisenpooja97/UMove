import { Payment } from './payment';
import { Vehicle } from './ vehicle';
import { Zone } from './zone';
import { Campaign } from './campaign';
import { User } from './user';
import { PaymentMethod } from './paymentMethod';



export class Ride {
    _id: string;
    payment: Payment;
    bookedAt: Date;
    status: string;
    vehicle: Vehicle;
    sourceZone: Zone;
    destinationZones: Zone[];
    paymentMethod: PaymentMethod;
    promocode: Campaign;
    rider: User;
}

import {Vehicle} from "./vehicle";
import {Zone} from "./zone";
import {User} from "./user";
import {Payment} from "./payment";
import {PaymentMethod} from "./payment-method";
import {Campaign} from "./campaign";


export class Ride {
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
    payment: Payment;
}

import { Fuel } from './fuel';

export class VehicleType {
    public id: string;
    public name: string;
    public costPerKm: number;
    public costPerMin: number;
    public vehicleCC: string;
    public mileage: number;
    public fuel: Fuel;
    public url: string;
    public baseFare: number;
}

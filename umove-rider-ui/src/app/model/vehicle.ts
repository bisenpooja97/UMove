import {VehicleType} from './vehicle-type';

export class Vehicle {
  public id: string;
  public zoneId: string;
  public insuranceNo: string;
  public status: string;
  public registrationNo: string;
  public vehicleType: VehicleType;
  public lastServiceDate: Date;
  public purchasedDate: Date;
  public chassisNumber: string;
}

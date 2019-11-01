import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Dialogs } from '@ionic-native/dialogs/ngx';
import { AlertController } from '@ionic/angular';
import {Vehicle} from '../model/vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {

  @Input() vehicle: Vehicle;
  @Output() changedVehicle = new EventEmitter();
  constructor( private alertController: AlertController) { }

  ngOnInit() {}

  async changeStatus() {
    const alert = await this.alertController.create({
      header: 'Select Status',
      inputs: [
        {
          name: 'status',
          type: 'radio',
          label: 'Available',
          value: 'Free',
          checked: true
        },
        {
          name: 'status',
          type: 'radio',
          label: 'Need Maintainance ',
          value: 'Servicing'
        },

      ],

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            // this.vehicle.status = JSON.stringify(data);
            console.log(data);
            this.vehicle.status = data;
            this.changedVehicle.emit(this.vehicle);
            // this.vehicleService.changeStatus(this.vehicle, this.vehicle.registrationNo).subscribe(updatedData => {
            //   console.log(updatedData);
            // });

          }
        }
      ]
    });

    await alert.present();
  }
}

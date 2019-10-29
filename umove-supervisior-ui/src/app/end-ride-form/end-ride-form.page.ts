import { Component, OnInit } from '@angular/core';
import {Ride} from "../model/ride";
import {ExtraCharge} from "../model/extra-charge";
import {RideService} from "../service/ride.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-end-ride-form',
  templateUrl: './end-ride-form.page.html',
  styleUrls: ['./end-ride-form.page.scss'],
})
export class EndRideFormPage implements OnInit {

  rideId: string;
  extraCharges: ExtraCharge[];
  selectedExtraCharges: ExtraCharge[];

  constructor(private router: Router, private route: ActivatedRoute, private rideService: RideService) { }

  ngOnInit() {
    this.selectedExtraCharges = [];
    this.extraCharges = [
      {
        chargedFor: 'Helmet Not Found',
        amount: 500
      },
      {
        chargedFor: 'Mirror Broken',
        amount: 100
      },
      {
        chargedFor: 'Damages',
        amount: 1000
      },
      {
        chargedFor: 'Scratches',
        amount: 300
      }
    ];

    this.route.paramMap.subscribe(params => {
      this.rideId = params.get('rideId');
    })
  }

  itemSelected(data, event) {
    if (event.target.checked) {
      // console.log('selected', data);
      this.selectedExtraCharges.push(data);
    } else {
      const index = this.selectedExtraCharges.indexOf(data, 0);
      if (index > -1) {
        this.selectedExtraCharges.splice(index, 1);
      }
    }
    // console.log('selected array: ', this.selectedCharges);
  }

  submitExtraCharges() {
    this.rideService.submitExtraCharges(this.rideId, this.selectedExtraCharges).then(response =>{
      console.log('response', response, response.status, JSON.parse(response.data));
      if (response && response.status === 200 && JSON.parse(response.data).status === 'OK') {
        this.rideService.presentToast('Extracharges submitted successfully.', 2000);
        this.router.navigateByUrl('');
      } else if (!response) {
        this.rideService.presentToast('Error: Something Went Wrong, Try again.', 2000);
        this.router.navigateByUrl('');
      } else {
        this.rideService.presentToast('Can\'t process your request right now', 2000);
        this.router.navigateByUrl('');
      }
    });
  }



}

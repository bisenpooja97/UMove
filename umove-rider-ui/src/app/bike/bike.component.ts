import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ZoneService} from '../service/zone/zone.service';
import {NavigationExtras, Router} from '@angular/router';


@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss'],
})
export class BikeComponent implements OnInit {

  @Input() type: {};
  @Input() trip: boolean;
  selectedType: object;
  @Output() selectedTypes = new EventEmitter();
  // tslint:disable-next-line:max-line-length
  constructor(private zoneService: ZoneService, private router: Router,
              // private bookingService: BookingService
  ) { }
  ngOnInit() {
    console.log('trip', this.trip);
    // console.log(this.bookingService.getCurrentBooking());
  }

  // For selecting bike and changing page type on behalf of booking type
  private selectingBike(type: {}) {
    this.selectedType = type;
    // this.zoneService.selectedType = this.selectedType;
    // const booking = this.bookingService.currentBooking;
    // booking.vehicle = type;
    // this.bookingService.setCurrentBooking(booking);
    // console.log(type);
    // const navigationExtras: NavigationExtras  = {
    //   state: {
    //     page: 'drop',
    //   }
    // };
    // if (this.trip) {
    //   this.router.navigate(['home'], navigationExtras);
    // } else {
    //   this.router.navigate(['booking'], navigationExtras);
    // }
    this.selectedTypes.emit(this.selectedType);
  }

}

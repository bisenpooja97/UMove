import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {json} from '@angular-devkit/core';
import {HTTP} from '@ionic-native/http/ngx';
import {UserPaymentMethod} from '../../model/user-payment-method/user-payment-method';
import {UserPaymentMethodService} from '../../services/user-payment-method/user-payment-method.service';
import {Storage} from '@ionic/storage';
import {UserProfile} from '../../model/user-profile';

@Component({
  selector: 'app-show-payment-method',
  templateUrl: './show-payment-method.page.html',
  styleUrls: ['./show-payment-method.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ShowPaymentMethodPage implements OnInit {
  public payment: UserPaymentMethod;
    private pid1: any;
    public localUser: UserProfile = {
        id: null ,
        name: '',
        mobileNumber: '',
        email: '',
        role: 'User',
        userStatus: null,
        // document: null,
    };
    key = 'details';
    // tslint:disable-next-line:max-line-length
  constructor(private userPaymentMethodService: UserPaymentMethodService, private router: Router, private http: HTTP, private storage: Storage) { }

  ionViewWillEnter () {
      this.storage.get(this.key).then( value => {
          console.log('Before:', value);
          this.localUser = value;
          console.log(this.localUser.id);
          this.userPaymentMethodService.getAllPaymentMethod(this.localUser.id)
              .then(data => {
                  console.log('filtered data: ', data);
                  console.log('Response: ', data.data);
                  this.payment = JSON.parse(data.data).data;
              });
      });
  }

   ngOnInit() {

  }
    goToHome() {}
    goAnotherPage() {
        this.router.navigateByUrl('/add-payment-method');
    }
    onSelect(data) {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                special: data
            }
        };
        this.router.navigateByUrl('/poc-payment', navigationExtras);
    }
  onDelete(pid: any) {
      this.storage.get(this.key).then( value => {
          console.log('Before:', value);
          this.localUser = value;
          console.log(this.localUser.id);
      this.pid1 = pid;
     this.userPaymentMethodService.deletePaymentMethod(this.localUser.id, pid)
         .then(
             resp => console.log('deleted'),
             error => console.log(error)
         );
      });
}
}

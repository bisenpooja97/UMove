import {Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HTTP} from '@ionic-native/http/ngx';
import {UserPaymentMethod} from '../../model/user-payment-method/user-payment-method';
import {UserPaymentMethodService} from '../../services/user-payment-method/user-payment-method.service';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.page.html',
  styleUrls: ['./add-payment-method.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class AddPaymentMethodPage implements OnInit {
  public addPayment: FormGroup;
  public payment: UserPaymentMethod;
  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private userPaymentMethodService: UserPaymentMethodService, private router: Router, private http: HTTP) { }
  ngOnInit() {
    this.addPayment = new FormGroup({
      paymentProvider: new FormControl('', Validators.required),
      paymentMethodNumber: new FormControl('', Validators.required),
      paymentType: new FormControl('', Validators.required)
    });
  }
  goShowPayment() {
    this.router.navigateByUrl('/show-payment-method');
  }
  addForm(data) {
     this.userPaymentMethodService.addPaymentMethod('5da1b2ba0e8e3d0001e33275', data)
         .then(res => {
           console.log(res);
         });
  }
}

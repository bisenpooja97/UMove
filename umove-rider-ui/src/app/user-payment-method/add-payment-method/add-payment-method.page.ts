import {Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HTTP} from '@ionic-native/http/ngx';
import {UserPaymentMethod} from '../../model/user-payment-method/user-payment-method';
import {UserPaymentMethodService} from '../../services/user-payment-method/user-payment-method.service';
import {Storage} from '@ionic/storage';
import {UserProfile} from '../../model/user-profile';
@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.page.html',
  styleUrls: ['./add-payment-method.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class AddPaymentMethodPage implements OnInit {
  public addPayment: FormGroup;
  public payment: UserPaymentMethod;
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
  constructor(private formBuilder: FormBuilder, private userPaymentMethodService: UserPaymentMethodService, private router: Router, private http: HTTP, private storage: Storage) { }
  ngOnInit() {
    this.addPayment = new FormGroup({
      paymentProvider: new FormControl('', Validators.required),
      paymentType: new FormControl('', Validators.required),
      paymentMethodNumber: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('')
      ]))
    });
  }
  goShowPayment() {
    this.router.navigateByUrl('/show-payment-method');
  }
  addForm(data) {
    this.storage.get(this.key).then(value => {
      console.log('Before:', value);
      this.localUser = value;
      console.log(this.localUser.id);
      this.userPaymentMethodService.addPaymentMethod(this.localUser.id, data)
          .then(res => {
            console.log(res);
          });
    });
  }
}


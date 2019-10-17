import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {environment} from '../../../environments/environment';
import {WindowService} from '../../services/window/window.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class LoginPage implements OnInit {
  pnumber: string;
  windowRef: any;
  verificationCode: string;
  user: any;
  disableButton: boolean;

  constructor(private win: WindowService, private  router: Router) { }

  ngOnInit() {
    firebase.initializeApp(environment.firebase);
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible'});
    // this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();

  }
  sendLoginCode() {
    this.disableButton = true;
    const appVerifier = this.windowRef.recaptchaVerifier;
    const countrycode = '+91';
    const p2 = countrycode.concat(this.pnumber);
    console.log(p2);
    const num = p2;

    // console.log(this.pnumber);

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
        .then(result => {

          this.windowRef.confirmationResult = result;
          this.router.navigateByUrl('/verify');
        })
        .catch( error => console.log(error) );
  }
  // verifyLoginCode() {
  //   this.windowRef.confirmationResult
  //       .confirm(this.verificationCode)
  //       .then( result => {
  //         this.user = result.user;
  //         this.router.navigateByUrl('/view-profile');
  //       })
  //       .catch( error => console.log(error, 'Incorrect code entered?'));
  // }
}


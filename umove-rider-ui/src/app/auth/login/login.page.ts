import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {environment} from '../../../environments/environment';
import {WindowService} from '../../service/window/window.service';
import {Storage} from '@ionic/storage';
import {UserProfile} from '../../model/user-profile';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class LoginPage implements OnInit {
  pnumber: string;
  windowRef: any;
  localUserData: UserProfile;
  key = 'details';
  verificationCode: string;
  user: any;
  disableButton: boolean;

  constructor(private win: WindowService, private  router: Router, private storage: Storage, private menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
    this.localUserData = new UserProfile();
  }

  ngOnInit() {
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

  ionViewWillEnter() {
    this.disableButton = false;
    this.storage.ready().then(() => {
      this.storage.get(this.key).then(value => {
        console.log('this is in storage', value);
        this.localUserData = value;
        if (this.localUserData && this.localUserData.id != null) {
          this.router.navigateByUrl('/home');
        } else {
          if (!firebase.apps.length) {
            firebase.initializeApp(environment.firebase);
          }
          // firebase.initializeApp(environment.firebase);
          this.windowRef = this.win.windowRef;
          this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible'});
          // this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
          this.windowRef.recaptchaVerifier.render();
        }
      });
    });
  }
}


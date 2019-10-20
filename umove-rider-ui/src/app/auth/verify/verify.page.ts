import { Component, OnInit } from '@angular/core';
import {WindowService} from '../../services/window/window.service';
import {Router} from '@angular/router';
import {UserProfile} from '../../model/user-profile';
import {Storage} from '@ionic/storage';
import {HTTP} from '@ionic-native/http/ngx';
import {UserProfileServiceService} from '../../services/users-profile/user-profile-service.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class VerifyPage implements OnInit {

  error: boolean;
  windowRef: any;
  key = 'details';
  verificationCode: string;
  localUserData: UserProfile;
  userDataRecieved: UserProfile;
  userData: UserProfile = {
    id: null ,
    name: '',
    mobileNumber: '',
    email: '',
    role: 'User',
    userStatus: null,
    // document: null,
  };
  user: any;
    inputtext: any;

    // tslint:disable-next-line:max-line-length
  constructor(private win: WindowService, private  router: Router, private http: HTTP , private storage: Storage, private userDataService: UserProfileServiceService) {
    this.error = false;
  }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
  }
  verifyLoginCode() {
    this.windowRef.confirmationResult
        .confirm(this.verificationCode)
        .then( result => {
          this.user = result.user;
          // console.log(this.user.phoneNumber);
           this.userData.mobileNumber = this.user.phoneNumber;
           console.log('In Verify Page', this.userData);
           this.userDataService.addUser(this.userData).then(res => {
                   this.userDataRecieved = JSON.parse(res.data).data;
                   console.log(this.userDataRecieved.id);
                   this.storage.ready().then(() => {
                       this.storage.set(this.key, this.userDataRecieved);
                       this.storage.get(this.key).then(value => {
                           console.log('this is in storage', value);
                       });
                   });
           });
            // this.storage.get('').then((val) => {
            //     console.log('Your age is', val);
            // });
            // return this.http.post('http://172.23.234.74:8091/api/v1/users/adduser', this.userData, {}).then(res => {
            //     // console.log(res.data);
            //     this.userDataRecieved = JSON.parse(res.data).data;
            //     console.log(this.userDataRecieved.mobileNumber);
            //     // this.userDataRecieved = res.data;
            // });
          this.router.navigateByUrl('/view-profile');
        })
        .catch( error => {
          console.log(error, 'Incorrect code entered?');
          this.error = true;
        });
  }

    loadData() {
    this.storage.get(this.key).then(value => {
        console.log('this is in storage', value);
    });
    }
}

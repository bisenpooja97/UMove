import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {UserProfile} from '../../model/user-profile';
import {UserProfileServiceService} from '../../services/users-profile/user-profile-service.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ViewProfilePage implements OnInit {

  private updateSubscription: Subscription;
  public user: UserProfile;
    key = 'details';

    // tslint:disable-next-line:max-line-length
  constructor(private userDataService: UserProfileServiceService, private router: Router, public toastController: ToastController, private storage: Storage) { }
  goAnOtherPage() {
    this.router.navigateByUrl('/update-kyc');
  }
  goAnOtherPage1() {
    this.router.navigateByUrl('/edit-profile');
  }
  goLogout() {
      this.storage.get(this.key).then(value => {
          console.log('Before:', value);
      });
      this.storage.set(this.key, '');
      this.storage.get(this.key).then(value => {
          console.log('After:', value);
      });
    this.router.navigateByUrl('/login');
  }
 async ionViewWillEnter() {
    this.userDataService.getUserDetailById('5da1a2b80e8e3d0001c8453e')
        .then(data => {
          console.log('filtered data: ', data);
          console.log('Response1 : ', data.data);
          this.user = JSON.parse(data.data).data;
          // console.log('mmmm', this.user);
        });
    const toast = await this.toastController.create({
      message: 'Welcome',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    // this.userDataService.getUserDetailById('5da1b2ba0e8e3d0001e33275')
    //     .then(data => {
    //       console.log('filtered data: ', data);
    //         console.log('Response1 : ', data.data);
    //         this.user = JSON.parse(data.data).data;
    //       // console.log('mmmm', this.user);
    //     });
    // const toast = await this.toastController.create({
    //   message: 'Welcome',
    //   duration: 2000
    // });
    // toast.present();
  }

}

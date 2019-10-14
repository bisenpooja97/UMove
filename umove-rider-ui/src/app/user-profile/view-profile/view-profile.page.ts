import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {UserProfile} from '../../model/user-profile';
import {UserProfileServiceService} from '../../services/users-profile/user-profile-service.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ViewProfilePage implements OnInit {

  private updateSubscription: Subscription;
  public user: UserProfile;

  constructor(private userDataService: UserProfileServiceService, private router: Router, public toastController: ToastController) { }
  goAnOtherPage() {
    this.router.navigateByUrl('/update-kyc');
  }
  goAnOtherPage1() {
    this.router.navigateByUrl('/edit-profile');
  }
  goLogout() {
    this.router.navigateByUrl('/login');
  }

  async ngOnInit() {
    // this.updateSubscription = interval(1000).subscribe(
    //     (val) => { this.updateStats();
    //     }
    // );
    this.userDataService.getUserDetailById('5da1a2b80e8e3d0001c8453e')
        .subscribe(data => {
          console.log('filtered data: ', data);
          this.user = data.data;
          // console.log('mmmm', this.user);
        });
    const toast = await this.toastController.create({
      message: 'Welcome',
      duration: 2000
    });
    toast.present();
  }

}

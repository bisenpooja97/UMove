import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {UserProfile} from '../model/user-profile';
import {UserProfileServiceService} from './users-profile/user-profile-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  localUserData: UserProfile;
  key = 'details';
  jsonkey = 'token';
  jsonToken: string;
  constructor(private router: Router, private storage: Storage, private userDataService: UserProfileServiceService) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    console.log(route);

    // const authInfo = {
    //   authenticated: false
    // };
    //
    // if (!authInfjwt claimso.authenticated) {
    //   this.router.navigate(['login']);
    //   return false;
    // }
    return this.storage.ready().then(() => {
    return this.storage.get(this.key).then(value => {
      this.localUserData = value;
      console.log('user ka data =>', value);
      if (this.localUserData.id != null) {
          console.log('user ka data h');
          return true;
      } else {
          console.log('user ka data ni h bhai sahab');
          this.router.navigateByUrl('/login');
          return false;
      }
    });
    });

    // return true;
  }
}

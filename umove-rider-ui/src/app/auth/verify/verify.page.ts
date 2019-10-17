import { Component, OnInit } from '@angular/core';
import {WindowService} from '../../services/window/window.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class VerifyPage implements OnInit {

  error: boolean;
  windowRef: any;
  verificationCode: string;
  user: any;

  constructor(private win: WindowService, private  router: Router) {
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
          this.router.navigateByUrl('/view-profile');
        })
        .catch( error => {
          console.log(error, 'Incorrect code entered?');
          this.error = true;
        });
  }
}

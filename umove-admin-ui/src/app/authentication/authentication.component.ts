import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  username = 'admin';
  password = 'admin';
  invalidLogin: boolean;

  constructor(
    private loginservice: AuthenticationService, private router: Router,
    private notificationService: NotificationService) {
  }
  ngOnInit() {
  }

  login(): void {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['/dashboard']);
      this.invalidLogin = false;
    } else {
      this.notificationService.warn('Invalid credentials!!!');
    }
  }

}

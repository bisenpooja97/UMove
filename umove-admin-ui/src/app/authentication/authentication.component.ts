import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

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
    private loginservice: AuthenticationService, private router: Router) {
  }
  ngOnInit() {
  }

  login(): void {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['/zones']);
      this.invalidLogin = false;
    } else {
      alert('Invalid credentials');
    }
  }

}

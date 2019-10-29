import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from '../service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit {

  @Input() users: User;
  id: object;
  name: object;
  mobileNumber: object;
  role: object;
  userStatus: object;

  constructor(private router: Router) {}

  ngOnInit() {
     console.log('User data is:', Object.values(this.users));
     this.id = Object.values(this.users)[0];
     this.name = Object.values(this.users)[1];
     this.mobileNumber = Object.values(this.users)[2];
     this.role =  Object.values(this.users)[4];
     this.userStatus = Object.values(this.users)[5];
  }

  ok() {
    console.log('ok', this.id);
    this.router.navigate(['users/details', this.id]);
    }

  getColor(userStatus) {
    switch (userStatus) {
    case 'Active':
    return '#1B5E20';
    case 'Inactive':
    return '#FFC400';
    case 'Suspended':
    return '#F44336';
    case 'Pending':
    return '#6D4C41';
}

}
}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from '../service/user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit {

  @Input() users: User[];
  name: object;
  mobileNumber: object;
  role: object;
  userStatus: object;

  constructor(private router: Router) {}

  ngOnInit() {
   // console.log(Object.values(this.users));
    this.name = Object.values(this.users)[0];
    this.mobileNumber = Object.values(this.users)[1];
    this.role =  Object.values(this.users)[3];
    this.userStatus = Object.values(this.users)[4];
  }



}

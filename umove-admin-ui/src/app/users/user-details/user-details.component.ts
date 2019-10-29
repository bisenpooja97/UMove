import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Document } from 'src/app/model/document';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { NotificationService } from 'src/app/shared/notification.service';

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

      user: User;
      id: string;
      name: string;
      mobileNumber: string;
      email: string;
      role: string;
      UserStatus: string;
      document: Document;

  userStatus: Status[] = [
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Suspended', viewValue: 'Suspended' },
  ];

  constructor(private router: Router, private userService: UserService,
              private activatedRoute: ActivatedRoute, private route: ActivatedRoute,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ParamMap id', this.id);
    this.userService.getUsersById(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.user = res.data;
      console.log('Response hello', typeof res.data);
      // this.name = this.user.name;
      // this.mobileNumber = this.user.mobileNumber;
      // this.email = this.user.email;
      this.document = this.user.document;
      console.log(this.document);
    });
  }

  onChange(newValue) {
    console.log(Object.values(this.user), Object.values(this.user)[5]);
    this.user.userStatus = newValue;
    console.log(this.user.userStatus, Object.values(this.user), this.user);
    // this.user = {
    //   id: "5da1aaf90e8e3d0001d6e58f",
    //   name: "Sachin",
    //   mobileNumber: "9414642078",
    //   email: "sachin@gmail.com",
    //   role: "User",
    //   userStatus: "Suspended",
    //   document: {
    //     documentStatus: "Pending",
    //     image: "DLImage",
    //     expiryDate: "2039-10-12",
    //     dlicenceNumber: "KA27-XY-2345"
    //   }
    // }
    this.userService.updateUsersById(this.id, this.user).subscribe(
      response => {
                   console.log('Call Success');
                   this.notificationService.success('UserStatus updated successfully!!');
      },
      error => this.notificationService.warn(error),
    );

}


}

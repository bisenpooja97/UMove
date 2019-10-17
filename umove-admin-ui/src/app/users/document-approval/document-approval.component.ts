import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/model/user';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-document-approval',
  templateUrl: './document-approval.component.html',
  styleUrls: ['./document-approval.component.css']
})
export class DocumentApprovalComponent implements OnInit {

  users: User[];
  id: string;
  name: object;
  mobileNumber: object;
  role: object;
  userStatus: object;
  document: Document;

  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
     console.log('User data is:', this.users);
     this.userservice.getUsers().subscribe(res => { 
      //  this.users = res.data;
       console.log(res, 'parent');
});

  }
  // this. = this.document[0];
    // this.name = Object.values(this.users)[1];
    // this.mobileNumber = Object.values(this.users)[2];
    // this.role =  Object.values(this.users)[4];
    // this.userStatus = Object.values(this.users)[5];

ok() {
    console.log('ok', this.id);
    this.router.navigate(['users/document', this.id]);

}
}

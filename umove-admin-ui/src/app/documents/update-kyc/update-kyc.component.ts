import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DocumentsService } from '../service/documents.service';
import { User } from 'src/model/user';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-update-kyc',
  templateUrl: './update-kyc.component.html',
  styleUrls: ['./update-kyc.component.css']
})
export class UpdateKycComponent implements OnInit {
 public users: User;
  constructor(private dialogRef: MatDialogRef<UpdateKycComponent>,
              @Inject(MAT_DIALOG_DATA) public data, private documentService: DocumentsService,
              private notificationService: NotificationService) {
               }

              onClose() {
                this.dialogRef.close();
              }

  ngOnInit() {
  //    this.documentService.getUsers().subscribe(res => { this.users = res.data;
  //                                                       console.log(this.users, 'parent');

  // }
  // );
}

approve() {
  // this.documentService.updateUsersById(this.users.id, this.users).subscribe(result =>{
  //   console.log(this.users.id, 'status');
  //   this.notificationService.success(' KYC approved successfully');

  //  });
 // console.log(this.data.users.id, 'id');
  console.log(this.data.users.userStatus, 'userstatus');
  console.log(this.data.users.document.documentStatus, 'documentstatus');
  this.data.users.userStatus = 'Active';
  this.data.users.document.documentStatus = 'Verified';
  // this.documentService.updateUsersById(this.data.users.id, this.data.users).subscribe(result => {
  //   console.log(this.data.users.id, 'status');
  //   this.notificationService.success(' KYC approved successfully');

  //  });

  this.dialogRef.close(this.data.users);
  }

  reject() {
    console.log(this.data.users.userStatus, 'userstatus');
    console.log(this.data.users.document.documentStatus, 'documentstatus');
    this.data.users.userStatus = 'Inactive';
    this.data.users.document.documentStatus = 'Rejected';
    this.dialogRef.close(this.data.users);
  }

}



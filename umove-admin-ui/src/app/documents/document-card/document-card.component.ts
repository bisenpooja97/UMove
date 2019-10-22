import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { UpdateKycComponent } from '../update-kyc/update-kyc.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.css']
})
export class DocumentCardComponent implements OnInit {
@Input() users: User;
  id: string;
  name: string;
  mobileNumber: string;
  documentStatus: string;
  dLicenceNumber: string;
  expiryDate: Date;
  image: string;

  constructor(private router: Router, private matDialog: MatDialog) { }

  ngOnInit() {
    console.log('User data is:', this.users);
    this.name = this.users.name;
    this.mobileNumber = this.users.mobileNumber;
    this.documentStatus = this.users.document.documentStatus;
    console.log(this.users.document.documentStatus);
    this.dLicenceNumber = this.users.document.dlicenceNumber;
    this.expiryDate = this.users.document.expiryDate;

  }

  ok() {
    console.log('ok', this.id);
    this.router.navigate(['users/', this.id]);
    }

  getColor(documentStatus) {
    switch (documentStatus) {
      case 'Pending':
        return 'red';
      case 'Verified':
        return 'green';
    }

    }

view() {
  const dRef = this.matDialog.open(UpdateKycComponent, {
      width: '40vw',
      disableClose: true,
      autoFocus: true,
      data: {
        name: this.users.name,
        imageUrl: `${environment.baseUrl}/api/v1/downloadFile/${this.users.id}`,
      }
    });

  // const dialogConfig = new MatDialogConfig();
  // dialogConfig.disableClose = true;
  // dialogConfig.autoFocus = true;
  // dialogConfig.width = '40vw';
  // dialogConfig.data = {
  //   ...this.users
  // };
  // const dRef = this.matDialog.open(UpdateKycComponent, dialogConfig);

}

}

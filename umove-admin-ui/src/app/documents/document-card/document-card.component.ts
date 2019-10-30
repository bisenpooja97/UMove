import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateKycComponent } from '../update-kyc/update-kyc.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { environment } from 'src/environments/environment';
import { DocumentsService } from '../service/documents.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.css']
})
export class DocumentCardComponent implements OnInit {
@Input() users: User;
@Output() removeDocumentCard = new EventEmitter<string>();

  id: string;
  name: string;
  mobileNumber: string;
  documentStatus: string;
  dLicenceNumber: string;
  expiryDate: Date;
  image: string;


  constructor(private router: Router, private matDialog: MatDialog,
              private documentService: DocumentsService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    console.log('User data is:', this.users);
    this.name = this.users.name;
    this.mobileNumber = this.users.mobileNumber;
    this.documentStatus = this.users.document.documentStatus;
    console.log(this.users.document.documentStatus, ':documentstatus');
    this.dLicenceNumber = this.users.document.dlicenceNumber;
    this.expiryDate = this.users.document.expiryDate;

  }

  ok() {
    console.log('ok', this.id);
    this.router.navigate(['users/', this.id]);
    }

    getColor(documentStatus) {
      switch (this.documentStatus) {
      case 'Pending':
      return '#ff0000';
      case 'Verified':
      return '#008000';
  }
  }

view() {
  const dRef = this.matDialog.open(UpdateKycComponent, {
      width: '40vw',
      disableClose: true,
      autoFocus: true,
      data: {
        name: this.users.name,
        id: this.users.id,
        imageUrl: `${environment.baseUrl}/userservice/api/v1/downloadFile/${this.users.id}`,
        users: this.users
      }
    });

  dRef.afterClosed().subscribe(result => {
      if (result !== undefined) {

        console.log(result.document.documentStatus, 'Document status' );
        this.documentService.updateUsersById(result.id, result).subscribe(val => {
    console.log(result.id, 'user-id');
    if (result.document.documentStatus  === 'Verified') {
           this.notificationService.success(' KYC approved successfully!');
    } else {

            this.notificationService.success('Sorry! KYC rejected.');

    }
// tslint:disable-next-line: align
 // this.router.navigate(['/documents']);

    this.removeDocumentCard.emit(this.users.id);
   });

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

import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DocumentsService } from '../service/documents.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-update-kyc',
  templateUrl: './update-kyc.component.html',
  styleUrls: ['./update-kyc.component.css']
})
export class UpdateKycComponent implements OnInit {
 public users: User;
  constructor(private dialogRef: MatDialogRef<UpdateKycComponent>,
              @Inject(MAT_DIALOG_DATA) public data, private documentService: DocumentsService) {
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

}


}


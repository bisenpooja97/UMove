import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { NotificationService } from '../shared/notification.service';
import { User } from 'src/app/model/user';
import { DocumentsService } from './service/documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() users: User;
  @Output() cardDeleted = new EventEmitter<string>();

 p = 1;
 dataSource = new MatTableDataSource();
  constructor(private documentService: DocumentsService, private notificationService: NotificationService, private matDialog: MatDialog) { }

  ngOnInit() {

    this.documentService.getUsers().subscribe(res => { this.users = res.data;
                                                       console.log(res, 'parent');
                                                      });
}

public removeDocument(userId) {
 const indexToRemove =  this.users.findIndex((user) => {
    return user.id === userId;
  });

 this.users.splice(indexToRemove, 1);
}


}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { UserService } from '../users/service/user.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  documents: Document;

 p = 1;
 dataSource = new MatTableDataSource();
  constructor(private userService: UserService, private notificationService: NotificationService, private matDialog: MatDialog) { }

  ngOnInit() {
  }

}

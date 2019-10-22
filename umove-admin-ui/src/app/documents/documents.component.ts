import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { NotificationService } from '../shared/notification.service';
import { Document } from 'src/model/document';
import { User } from 'src/model/user';
import { DocumentsService } from './service/documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() users: User;

 p = 1;
 dataSource = new MatTableDataSource();
  constructor(private documentService: DocumentsService, private notificationService: NotificationService, private matDialog: MatDialog) { }

  ngOnInit() {

    this.documentService.getUsers().subscribe(res => { this.users = res.data;
                                                       console.log(res, 'parent');
});
}

}

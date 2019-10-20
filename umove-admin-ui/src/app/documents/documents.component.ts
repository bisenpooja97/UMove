import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { UserService } from '../users/service/user.service';
import { NotificationService } from '../shared/notification.service';
import { Document } from 'src/model/document';
import { User } from 'src/model/user';

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
  constructor(private userService: UserService, private notificationService: NotificationService, private matDialog: MatDialog) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(res => { this.users = res.data;
                                                   console.log(res, 'parent');
});
}

}

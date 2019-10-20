import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { UserService } from './service/user.service';
import { User } from 'src/model/user';
import { AddUserComponent } from './add-user/add-user.component';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
   users: User;
   supervisors: User;

  p = 1;
  dataSource = new MatTableDataSource();

  constructor(private userService: UserService, private notificationService: NotificationService, private matDialog: MatDialog) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(res => { this.users = res.data;
                                                   console.log(res, 'parent');

});

  }

  // add() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '40%';
  //   const dRef = this.matDialog.open(AddUserComponent, dialogConfig);

  //   dRef.afterClosed().subscribe(result => {
  //     if (result !== undefined) {
  //     this.userService.addUser(result)
  //         .subscribe(
  //           response => {
  //             this.notificationService.success(' Supervisor Added successfully');

  //             this.getUsersInfo();
  //           }); }
  //    });

  // }
  // getUsersInfo() {
  //   return this.userService.getUsers().subscribe(res => { this.users = res.data;
  //   });
  // }


}

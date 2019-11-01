import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from '../service/user.service';
import { MatTableDataSource, MatDialogConfig, MatDialog } from '@angular/material';
import { AddUserComponent } from '../add-user/add-user.component';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  supervisors: User;
  id: string;
  name: string;
  mobileNumber: string;
  email: string;
  role: string;
  userStatus: string;
  displayCount: number;

  p = 1;
  dataSource = new MatTableDataSource();

  constructor(private userService: UserService, private notificationService: NotificationService, private matDialog: MatDialog) { }

  ngOnInit() {
 this.getSupervisorInfo();
  }

  ok() {
    console.log('ok', this.role);
    // this.router.navigate(['supervisors', this.role]);
    }

    add() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '40%';
      const dRef = this.matDialog.open(AddUserComponent, dialogConfig);

      dRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
      this.userService.addUser(result)
          .subscribe(
            response => {
              this.notificationService.success(' Supervisor Added successfully');
              this.getSupervisorInfo();
            }); }
     });
    }

    getSupervisorInfo() {
    return this.userService.getSupervisors().subscribe(res => {
      if (res.count === undefined || res.count === 0) {
        this.displayCount = 0;
      } else {
  this.supervisors = res.data;
      }
},
error => {
  if (error.status === 400) {
    this.displayCount = 0;
  }
});
  }

  getColor(userStatus) {
    switch (userStatus) {
    case 'Allocated':
    return '#1B5E20';
    case 'Unallocated':
    return '#FFC400';
}

}

}

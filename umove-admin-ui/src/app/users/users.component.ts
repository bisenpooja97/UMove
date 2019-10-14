import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { UserService } from './service/user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() users: User[];

  p = 1;
  dataSource = new MatTableDataSource();

  constructor(private userService: UserService, private matDialog: MatDialog) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(res => { this.users = res.data;
                                                   console.log(res, 'parent');

});
  }

}

import { Component, OnInit } from '@angular/core';
import { Zone } from 'src/app/model/zone';
import { Router, ActivatedRoute } from '@angular/router';
import { ZoneService } from '../service/zone.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddSupervisorComponent } from '../add-supervisor/add-supervisor.component';
import { Supervisor } from 'src/app/model/supervisor';

@Component({
  selector: 'app-supervisor-details',
  templateUrl: './supervisor-details.component.html',
  styleUrls: ['./supervisor-details.component.css']
})
export class SupervisorDetailsComponent implements OnInit {

  zone: Zone[];
  name: string;
  sName: string;
  sNumber: string;
  sEmail: string;
  status: string;
  supervisor: Supervisor[];
  buttonDisabled: boolean;

  constructor(private router: Router, private zoneService: ZoneService,
              private activatedRoute: ActivatedRoute, private route: ActivatedRoute,
              private notificationService: NotificationService,
              private matDialog: MatDialog) { }

  ngOnInit() {
    this.getZoneDetails();
    this.getSupervisor();
    this.buttonDisabled = false;
  }

  getZoneDetails() {
    this.zoneService.getZoneByName(this.route.snapshot.paramMap.get('name')).subscribe(res => {
      this.zone = res.data;
      console.log(this.zone);
      this.name = this.zone[0].name;
      this.sName = this.zone[0].supervisorName;
      this.sNumber = this.zone[0].supervisorNumber;
      this.sEmail = this.zone[0].supervisorEmail;
      this.status = 'Daily';
      if (this.zone[0].supervisorName !== null) {
        console.log(this.zone, 'yes');
        this.buttonDisabled = true;
         }
    });
  }

  addSupervisor() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      supervisor : this.supervisor,
    };
    const dRef = this.matDialog.open(AddSupervisorComponent, dialogConfig);
    dRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined) {
        this.zoneService.updateZones(this.name, result).subscribe(
          response => { this.notificationService.success('Zone updated successfully!!'),
          this.getZoneDetails();
        },
        error => {
          this.notificationService.warn('Can\'t update ');
        }
        );
      }
    });
  }
  getSupervisor() {
    this.zoneService.getSupervisor().subscribe(
      res => {
        this.supervisor = res.data;
        console.log(this.supervisor);
      });
  }
}

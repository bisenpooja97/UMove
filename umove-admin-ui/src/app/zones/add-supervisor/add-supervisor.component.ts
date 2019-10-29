import { Component, OnInit, Inject } from '@angular/core';
import { Supervisor } from 'src/app/model/supervisor';
import { ZoneService } from '../service/zone.service';
import { FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Zone } from 'src/app/model/zone';

@Component({
  selector: 'app-add-supervisor',
  templateUrl: './add-supervisor.component.html',
  styleUrls: ['./add-supervisor.component.css']
})
export class AddSupervisorComponent implements OnInit {

  supervisor: Supervisor[];
  zone: Zone[];
  sname2: string;
  sid: string;
  scontact: string;
  semail: string;
  myControl = new FormControl();
  options: Supervisor[] = [];
  selectedSupervisor;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private router: Router,  private zoneService: ZoneService,
              public dialogRef: MatDialogRef<AddSupervisorComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
                this.supervisor = data.supervisor;
                this.options = data.supervisor;
                this.sname2 = data.sName;
              }
  zoneForm = this.fb.group({
    supervisorName: [''],
    supervisorNumber: [''],
    supervisorId: [''],
    supervisorEmail: [''],
    userStatus: ['']
  });

  ngOnInit() {
    console.log(this.sname2);
  }

  onClose() {
    this.zoneForm.reset();
    this.dialogRef.close();
  }

  onSubmit() {
    this.zoneForm.value.supervisorNumber = Object.values(this.selectedSupervisor)[2];
    this.zoneForm.value.supervisorId = Object.values(this.selectedSupervisor)[0];
    this.zoneForm.value.supervisorEmail = Object.values(this.selectedSupervisor)[3];
    this.zoneForm.value.supervisorName = Object.values(this.selectedSupervisor)[1];
    this.zoneForm.value.userStatus = 'Allocated';
    this.dialogRef.close(this.zoneForm.value);
  }

  selectedclient(event) {
    this.selectedSupervisor = event.option.value;
  }

  getOptionText(option) {
    return option.name;
  }
}

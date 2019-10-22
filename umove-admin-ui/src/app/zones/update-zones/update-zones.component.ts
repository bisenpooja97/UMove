import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ZoneService } from '../service/zone.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-zones',
  templateUrl: './update-zones.component.html',
  styleUrls: ['./update-zones.component.css']
})
export class UpdateZonesComponent implements OnInit {

  capacity: number;

  constructor(public dialogRef: MatDialogRef<UpdateZonesComponent>,
              private fb: FormBuilder, private route: ActivatedRoute,
              private router: Router, private zoneService: ZoneService,
              @Inject(MAT_DIALOG_DATA) data) {
                this.capacity = data.capacity;
              }


  zoneForm = this.fb.group({
    capacity: ['']
  });

  onClose() {
    // this.zoneForm.reset();
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.zoneForm.value);
    this.dialogRef.close(this.zoneForm.value);
  }

  ngOnInit() {
  }

}

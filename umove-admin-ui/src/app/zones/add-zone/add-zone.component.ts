import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ZoneService } from '../service/zone.service';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css']
})
export class AddZoneComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddZoneComponent>,
    private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router, private zoneService: ZoneService) { }

    zoneForm = this.fb.group({
      name: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]],
      lat: [''],
      lon: [''],
      city: ['', [Validators.pattern('[a-zA-z]+')]],
      locality: ['', [Validators.pattern('[a-zA-z ]+')]],
      state: ['', [Validators.pattern('[a-zA-z]+')]],
      country: ['', [Validators.pattern('[a-zA-z]+')]],
      capacity: ['', [Validators.pattern('^[0-9]*$')]],
      status: ['INACTIVE']
    });

    onClose() {
      this.dialogRef.close();
    }

    ngOnInit() {

    }
}

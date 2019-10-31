import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ZoneService } from '../service/zone.service';
import { NotificationService } from 'src/app/shared/notification.service';
// import { Zone } from 'src/app/model/zone';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css']
})
export class AddZoneComponent implements OnInit {


  location: any;
  lat1: number;
  lon1: number;
  con: string;


  get zone() {
    return this.zoneForm.get('name');
  }

  get locality() {
    return this.zoneForm.get('locality');
  }

  get capacity() {
    return this.zoneForm.get('capacity');
  }

  constructor(
    public dialogRef: MatDialogRef<AddZoneComponent>,
    private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router, private zoneService: ZoneService,
    private notificationService: NotificationService,
    ) {}

    zoneForm = this.fb.group({
      name: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]],
      lat: [''],
      lon: [''],
      city: [''],
      locality: ['', [Validators.pattern('[a-zA-z0-9\- ]+')]],
      state: [''],
      country: [''],
      capacity: ['', [Validators.pattern('^[0-9]*$')]],
      status: ['INACTIVE'],
      pincode: [560002]
    });

    getErrorZoneName() {
      return this.zone.hasError('pattern') ? 'Zone Name should not contain any special characters.' :
        '';
    }

    getErrorZoneLocality() {
      return this.locality.hasError('pattern') ? 'Locality should not contain any special characters.' :
        '';
    }

    getErrorCapacity() {
      return this.capacity.hasError('pattern') ? 'Capacity should contain only numbers.' :
        '';
    }

    onClose() {
      this.zoneForm.reset();
      this.dialogRef.close();
    }

    ngOnInit() {

    }

    onSubmit() {
      console.log(this.location);
      this.zoneForm.value.lat = this.location.position.lat;
      this.zoneForm.value.lon = this.location.position.lon;
      this.zoneForm.value.country = this.location.address.country;
      this.zoneForm.value.city = this.location.address.countrySecondarySubdivision;
      this.zoneForm.value.state = this.location.address.countrySubdivision;
      console.log(this.zoneForm.value, 'child');
      this.dialogRef.close(this.zoneForm.value);
    }

    getLocation() {
    if (this.zoneForm.value.locality === '') {
          this.notificationService.warn('Please provide locality!!!');
        } else {
            this.zoneService.getAddress(this.zoneForm.value.locality).subscribe(
              res => {
                this.location = res.data.results[0];
                console.log(this.location);
                if (this.location == null) {
                  this.notificationService.warn('No location found!!');
                } else {
                   this.notificationService.success('Location added successfully');
                   this.lat1 = this.location.position.lat;
                   this.lon1 = this.location.position.lon;
                   this.con = this.location.address.country;
                   console.log(this.location.address.country + '' + this.lat1 + ' ' + this.lon1 + ' ' + this.con);
                }
             }
            );
          }
  }

}

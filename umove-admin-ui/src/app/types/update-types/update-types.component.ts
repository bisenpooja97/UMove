import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleTypeService } from '../vehicle-type.service';

@Component({
  selector: 'app-update-types',
  templateUrl: './update-types.component.html',
  styleUrls: ['./update-types.component.css']
})
export class UpdateTypesComponent implements OnInit {

  costPerMin: number;
  constructor(public dialogRef: MatDialogRef<UpdateTypesComponent>,
              private fb: FormBuilder, private route: ActivatedRoute,
              private router: Router, private vehicleTypeService: VehicleTypeService,
              @Inject(MAT_DIALOG_DATA) data) {
      this.costPerMin = data.costPerMin;
    }

    get Rcosttime() {
      return this.typeForm.get('costPerMin');
    }

    typeForm = this.fb.group({
      costPerMin: ['', [Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]]
    });

    getErrorCosttime() {
      return  this.Rcosttime.hasError('pattern') ? 'Invalid cost for  Time' :
          '';
    }

    onClose() {
      // this.zoneForm.reset();
      this.dialogRef.close();
    }

    onSubmit() {
      console.log(this.typeForm.value);
      this.dialogRef.close(this.typeForm.value);
    }

  ngOnInit() {
  }

}

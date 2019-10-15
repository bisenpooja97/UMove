import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleTypeService } from '../vehicle-type.service';

@Component({
  selector: 'app-update-types',
  templateUrl: './update-types.component.html',
  styleUrls: ['./update-types.component.css']
})
export class UpdateTypesComponent implements OnInit {

  costtime: number;
  constructor(public dialogRef: MatDialogRef<UpdateTypesComponent>,
              private fb: FormBuilder, private route: ActivatedRoute,
              private router: Router, private vehicleTypeService: VehicleTypeService,
              @Inject(MAT_DIALOG_DATA) data) {
      this.costtime = data.costtime;
    }


    typeForm = this.fb.group({
      costtime: ['']
    });

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

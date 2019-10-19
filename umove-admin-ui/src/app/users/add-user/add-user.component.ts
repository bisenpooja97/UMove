import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  form: FormGroup;
  name: string;
  mobileNumber: string;
  Role: string;
  emailId: string;

  get user() {
    return this.userForm.get('name');
  }

  get mobileNo() {
    return this.userForm.get('mobileNumber');
  }

  get email() {
    return this.userForm.get('email-Id');
  }

  get role() {
    return this.userForm.get('role');
  }

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private dialogRef: MatDialogRef<AddUserComponent>,
              @Inject(MAT_DIALOG_DATA) data) { }

              userForm = this.fb.group({
                name: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]],
                mobileNumber: ['', [Validators.pattern('[a-zA-z]+')]],
                email: ['', []],
                role: ['', []],
                userStatus: ['Unallocated']
              });

              onClose() {
                this.userForm.reset();
                this.dialogRef.close();
              }

  ngOnInit() {}

  onSubmit() {
    console.log(this.userForm.value);
    this.dialogRef.close(this.userForm.value);

}
}

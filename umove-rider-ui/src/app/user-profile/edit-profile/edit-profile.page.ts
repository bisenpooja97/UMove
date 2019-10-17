import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserProfileServiceService} from '../../services/users-profile/user-profile-service.service';
import {UserProfile} from '../../model/user-profile';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class EditProfilePage implements OnInit {
    public todo: FormGroup;
    user: UserProfile;
    // tslint:disable-next-line:max-line-length
    constructor(private formBuilder: FormBuilder, private userDataService: UserProfileServiceService, private router: Router, private  http: HttpClient, public toastController: ToastController) {
    }

    ngOnInit() {
        this.userDataService.getUserDetailById('5da1b2ba0e8e3d0001e33275')
            .then(data => {
                console.log('filtered data: ', data);
                this.user = JSON.parse(data.data).data;
                this.todo = new FormGroup({
                    name: new FormControl(this.user.name),
                    email: new FormControl(this.user.email),
                    mobileNumber: new FormControl(this.user.mobileNumber),
                });
            });
    }
    async logForm(data) {
        // this.http.patch('http://172.23.234.63:8091/api/v1/users/5d8de55aa0867c20905218b1', data).subscribe(res => {
        //    console.log('response', res); // handle event here
        // });


        this.userDataService.editProfileById('5da1b2ba0e8e3d0001e33275', data).then(res => {
            console.log(res);
        });
        const toast = await this.toastController.create({
            message: 'Profile Updated Successfully.',
            duration: 2000
        });
        toast.present();
    }
}

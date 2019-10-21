import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserProfileServiceService} from '../../services/users-profile/user-profile-service.service';
import {UserProfile} from '../../model/user-profile';
import {ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';


@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.page.html',
    styleUrls: ['./edit-profile.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class EditProfilePage implements OnInit {
    public todo: FormGroup;
    user: UserProfile;
    public localUser;
    key = 'details';
    // tslint:disable-next-line:max-line-length
    constructor(private formBuilder: FormBuilder, private userDataService: UserProfileServiceService, private router: Router, private  http: HttpClient, public toastController: ToastController, private storage: Storage) {
        this.localUser = new UserProfile();
    }

    ngOnInit() {
        this.storage.ready().then(() => {
            this.storage.get(this.key).then(value => {
                console.log('Before:', value);
                this.localUser = value;
                console.log(this.localUser.id);
                this.userDataService.getUserDetailById(this.localUser.id)
                    .then(data => {
                        console.log('filtered data: ', data);
                        this.user = JSON.parse(data.data).data;
                        this.todo = new FormGroup({
                            name: new FormControl(this.user.name),
                            email: new FormControl(this.user.email),
                            mobileNumber: new FormControl(this.user.mobileNumber),
                        });
                    });
            });
        });
    }
    async logForm(data) {
        this.storage.ready().then(() => {
            this.storage.get(this.key).then(async value => {
                console.log('Before:', value);
                this.localUser = value;
                console.log(this.localUser.id);
                this.userDataService.editProfileById(this.localUser.id, data).then(res => {
                    console.log(res);
                    this.router.navigateByUrl('/home');
                });
                const toast = await this.toastController.create({
                    message: 'Profile Updated Successfully.',
                    duration: 2000
                });
                toast.present();
            });
        });
    }
}

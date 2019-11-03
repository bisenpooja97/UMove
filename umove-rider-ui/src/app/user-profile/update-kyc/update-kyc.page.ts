import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserProfileServiceService} from '../../service/users-profile/user-profile-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {UserProfile} from '../../model/user-profile';
import {Storage} from '@ionic/storage';
import {FCM} from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-update-kyc',
  templateUrl: './update-kyc.page.html',
  styleUrls: ['./update-kyc.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class UpdateKycPage implements OnInit {
  public localUser: UserProfile;
  key = 'details';
  private disableButton: boolean;
  private userID: string;

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private userDataService: UserProfileServiceService, private router: Router, private route: ActivatedRoute, public toastController: ToastController, private storage: Storage, private fcm: FCM) {
    this.localUser = new UserProfile();
    // console.log(this.router.getCurrentNavigation().extras);
    // this.route.queryParams.subscribe(params => {
    //    this.campaigns = this.router.getCurrentNavigation().extras.queryParams.special;
    //    console.log(this.campaigns);
    // });

  }

  selectedFile: File;
  todo: FormGroup;
  public campaigns: any = [];

  onFileChanged(event) {
    // const reader = new FileReader();
    // reader.onload = (e: any) => {
    //     const localUrl = e.target.result;
    // };
    // console.log(reader.readAsDataURL(event.target.files[0]));
    //
    // console.log('event for file upload', event);
    this.disableButton = false;
    // const reader = new FileReader();
    // reader.onload = (e: any) => {
    //     const localUrl = e.target.result;
    // };
    // console.log(reader.readAsDataURL(event.target.files[0]));
    //
    // console.log('event for file upload', event);
    this.selectedFile = event.target.files[0];
    if (this.selectedFile.size > 309710) {
      alert('File is too Large! i.e Upload Image should be less than 200kb');
      this.selectedFile = null;
      this.disableButton = true;
    }

  }

  async onUpload(data) {
    this.storage.get(this.key).then(async value => {
      this.localUser = value;
      console.log('data: ', data);
      const formData = {
        document: data
      };
      this.userDataService.uploadDldetailsById(this.localUser.id, formData).then(res => {
        // console.log(res);
      });
      const uploadData = new FormData();
      uploadData.append('file', this.selectedFile, this.selectedFile.name);
      this.userDataService.uploadProfileById(this.localUser.id, uploadData).subscribe(res => {
        console.log(res);
        toast.present();
      });
      const toast = await this.toastController.create({
        message: 'KYC Details Uploaded Successfully.',
        duration: 2000
      });
      this.router.navigateByUrl('/view-profile');
    });
  }

  ngOnInit() {
    this.disableButton = true;
    this.todo = new FormGroup({
      dlicenceNumber: new FormControl(''),
      expiryDate: new FormControl(''),
    });

    this.storage.get(this.key).then(value => {
      console.log('Before:', value);
      this.localUser = value;
      console.log(this.localUser.id);
      // console.log(this.localUser.document.documentStatus);
      console.log('subscribed topic');
      this.fcm.subscribeToTopic(this.localUser.id);

      this.fcm.getToken().then(token => {
        console.log('token:', token);
        // backend.registerToken(token);
      });

      this.fcm.onNotification().subscribe(data => {
        console.log('data from notification', data.documentStatus);
        // console.log('not working i guess ', this.localUser.document.documentStatus);
        this.localUser.document.documentStatus = data.documentStatus;
        console.log(this.localUser.document.documentStatus);
        this.storage.set(this.key, this.localUser);
        this.storage.get(this.key).then(value => {
          console.log('After:', value);
        });
        // if(data.wasTapped){
        //     console.log("Received in background");
        // } else {
        //     console.log("Received in foreground");
        // };
      });
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log('refreshed token:', token);
        // backend.registerToken(token);
      });
    });
  }
}

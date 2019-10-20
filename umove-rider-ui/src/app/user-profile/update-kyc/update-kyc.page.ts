import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserProfileServiceService} from '../../services/users-profile/user-profile-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {UserProfile} from '../../model/user-profile';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-update-kyc',
  templateUrl: './update-kyc.page.html',
  styleUrls: ['./update-kyc.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class UpdateKycPage implements OnInit {
  public localUser: UserProfile = {
    id: null ,
    name: '',
    mobileNumber: '',
    email: '',
    role: 'User',
    userStatus: null,
    // document: null,
  };
  key = 'details';

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private userDataService: UserProfileServiceService , private router: Router , private route: ActivatedRoute, public toastController: ToastController, private storage: Storage) {
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
    this.selectedFile = event.target.files[0];
  }

  async onUpload(data) {
    this.storage.get(this.key).then(async value => {
      console.log('Before:', value);
      this.localUser = value;
      console.log(this.localUser.id);
      console.log('data: ', data);
      const formData = {
        document: data
      };
      this.userDataService.uploadDldetailsById(this.localUser.id, formData).then(res => {
        console.log(res);
      });
      const uploadData = new FormData();
      uploadData.append('file', this.selectedFile, this.selectedFile.name);
      this.userDataService.uploadProfileById(this.localUser.id, uploadData).subscribe(res => {
        console.log(res);
      });
      const toast = await this.toastController.create({
        message: 'KYC Details Uploaded Successfully.',
        duration: 2000
      });
      toast.present();
    });
  }

  ngOnInit() {
    this.todo = new FormGroup({
      dlicenceNumber: new FormControl(''),
      expiryDate: new FormControl(''),
    });
  }

}

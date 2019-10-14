import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserProfileServiceService} from '../../services/users-profile/user-profile-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-update-kyc',
  templateUrl: './update-kyc.page.html',
  styleUrls: ['./update-kyc.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class UpdateKycPage implements OnInit {

  selectedFile: File;
  todo: FormGroup;
  public campaigns: any = [];
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  async onUpload(data) {
    console.log('data: ', data);
    const formData = {
      document: data
    };
    this.userDataService.uploadDldetailsById('5da1a2b80e8e3d0001c8453e', formData).subscribe(res => {
      console.log(res);
    });
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);

    this.userDataService.uploadProfileById('5da1a2b80e8e3d0001c8453e', uploadData).subscribe(res => {
      console.log(res);
    });
    const toast = await this.toastController.create({
      message: 'KYC Details Uploaded Successfully.',
      duration: 2000
    });
    toast.present();
  }

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private userDataService: UserProfileServiceService , private router: Router , private route: ActivatedRoute, public toastController: ToastController) {
    // console.log(this.router.getCurrentNavigation().extras);
    // this.route.queryParams.subscribe(params => {
    //    this.campaigns = this.router.getCurrentNavigation().extras.queryParams.special;
    //    console.log(this.campaigns);
    // });

  }

  ngOnInit() {
    this.todo = new FormGroup({
      drivingLicenceNumber: new FormControl(''),
      expiryDate: new FormControl(''),
    });
  }


}

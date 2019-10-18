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

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private userDataService: UserProfileServiceService , private router: Router , private route: ActivatedRoute, public toastController: ToastController) {
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
    console.log('data: ', data);
    const formData = {
      document: data
    };
    this.userDataService.uploadDldetailsById('5da1a2b80e8e3d0001c8453e', formData).then(res => {
      console.log(res);
    });
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);

    this.userDataService.uploadProfileById('5da1a2b80e8e3d0001c8453e', uploadData).subscribe(res => {
      console.log(res);
    });
    const toast = await this.toastController.create({
      message: 'KYC Details Uploaded Successfully.',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.todo = new FormGroup({
      dlicenceNumber: new FormControl(''),
      expiryDate: new FormControl(''),
    });
  }

}

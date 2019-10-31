import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {json} from '@angular-devkit/core';
import {HTTP} from '@ionic-native/http/ngx';
import {UserPaymentMethodService} from '../../service/user-payment-method/user-payment-method.service';
import {Storage} from '@ionic/storage';
import {UserProfile} from '../../model/user-profile';
import {PaymentMethod} from '../../model/payment-method';

@Component({
    selector: 'app-show-payment-method',
    templateUrl: './show-payment-method.page.html',
    styleUrls: ['./show-payment-method.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ShowPaymentMethodPage implements OnInit {
    public payment: PaymentMethod;
    private pid1: any;
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
    page: string;
    // tslint:disable-next-line:max-line-length
    constructor(private userPaymentMethodService: UserPaymentMethodService, private router: Router,
                private http: HTTP, private storage: Storage, private route: ActivatedRoute) { }

    ionViewWillEnter() {
        this.storage.get(this.key).then( value => {
            console.log('Before:', value);
            this.localUser = value;
            console.log(this.localUser.id);
            this.userPaymentMethodService.getAllPaymentMethod(this.localUser.id)
                .then(data => {
                    console.log('filtered data: ', data);
                    console.log('Response: ', data.data);
                    this.payment = JSON.parse(data.data).data;
                });
        });
    }

    ngOnInit() {
        this.page = this.route.snapshot.paramMap.get('page');
    }

    goToHome() {}
    goAnotherPage() {
        this.router.navigateByUrl('/add-payment-method/' + this.page);
    }
    onSelect(data) {
        if (this.page==='select') {
            const navigationExtras: NavigationExtras = {
                state: {
                    selectedPaymentMethod: data
                }
            };
            this.router.navigateByUrl('confirm-ride-detail', navigationExtras);
        }
    }
    onDelete(pid: any) {
        this.storage.get(this.key).then( value => {
            console.log('Before:', value);
            this.localUser = value;
            console.log(this.localUser.id);
            this.pid1 = pid;
            this.userPaymentMethodService.deletePaymentMethod(this.localUser.id, pid)
                .then(
                    resp => console.log('deleted'),
                    error => console.log(error)
                );
        });
    }
}

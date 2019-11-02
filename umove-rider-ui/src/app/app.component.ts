import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {User} from './model/user';
import {Storage} from '@ionic/storage';
import {FCM} from "@ionic-native/fcm/ngx";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    currentUser: User;

    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'My Rides',
            url: '/my-rides',
            icon: 'time'
        },
        {
            title: 'Payment Method',
            url: '/show-payment-method/view',
            icon: 'wallet'
        },
        {
            title: 'Offers',
            url: '/campaigns/view',
            icon: 'gift'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: Storage,
        private fcm: FCM
    ) {
        this.initializeApp();
        console.log('user ka data le rhe h =>');
        storage.ready().then(() => {
            console.log('storage bhi tyar h');
            storage.get('details').then(value => {
                console.log('or ye aagya data', value);
                this.currentUser = value;
            });
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {

            console.log('subscribed topic');
            this.fcm.subscribeToTopic('news');

            this.fcm.getToken().then(token => {
                console.log('token:', token);
                // backend.registerToken(token);
            });

            this.fcm.onNotification().subscribe(data => {
                console.log('data from notification', data)
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

            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}

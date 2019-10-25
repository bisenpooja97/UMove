import { Component, OnInit } from '@angular/core';
import { Ride } from '../model/ride';
import { RideService } from '../service/ride.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RideSocketService } from '../service/ride-socket.service';

@Component({
    selector: 'app-qrcode-generator',
    templateUrl: './qrcode-generator.page.html',
    styleUrls: ['./qrcode-generator.page.scss'],
})
export class QrcodeGeneratorPage implements OnInit {
    qrData = null;
    createdCode = null;
    ride: Ride;

    constructor(private rideService: RideService, private route: ActivatedRoute, private router: Router,
        private websocketService: RideSocketService) {


        this.rideService.getRideDetailsByUserIdNStatus('5d8bbc0da6e87d5404aa1921', 'Started')
            .then(response => {
                console.log('Ride details: ', response);
                this.ride = JSON.parse(response.data).data;
                // tslint:disable-next-line: object-literal-key-quotes
                this.createdCode = JSON.stringify({ '_id': this.ride._id });
                console.log('Created code data should be: ', this.createdCode);
            });

        this.websocketService.connect().then((result) => {
            console.log('Connected');
            this.websocketService.subscribeTopic('/topic/end-ride/' + this.ride._id).subscribe((message) => {
                console.log('data from socket: ', message);
                if (message && message.status === 'Ended') {
                    rideService.presentToast('Your ride is ended.', 2000);
                    router.navigateByUrl('payment-detail/' + this.ride._id);
                } else {
                    rideService.presentToast('Something went wrong', 2000);
                }
            });
        }).catch((error) => {
            console.error('Failed to connect');
        });
    }

    ngOnInit() {

    }

}

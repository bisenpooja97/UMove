import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from './service/settings.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  autocancelTimeValue: number;
  cancelThresholdTimeValue: number;

  constructor(private settingsService: SettingsService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.settingsService.getConfigurationByName('autocancelTime').subscribe(response => {
      // tslint:disable-next-line: no-string-literal
      console.log('response', response);
      this.autocancelTimeValue = response['data'].value;
      console.log('Autocancel time: ', this.autocancelTimeValue);
    });

    this.settingsService.getConfigurationByName('cancelThresholdTime').subscribe(response => {
      // tslint:disable-next-line: no-string-literal
      this.cancelThresholdTimeValue = response['data'].value;
      console.log('Autocancel time: ', this.cancelThresholdTimeValue);
    });

  }

  onTimeChange(name: string, value: number) {
    this.settingsService.updateConfigurationByName(name, value).subscribe(response => {
      this.notificationService.success('Time Updated successfully!!');
      console.log('Response of updated time: ', response);
    },
    error => {
     if ( error.status === 400) {
      this.notificationService.warn('Time cannot be Updated!!');
     }
    });
  }

}

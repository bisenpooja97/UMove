import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from './service/settings.service';
import { NotificationService } from '../shared/notification.service';
import { Configuration } from '../model/configuration';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  configurations: Configuration[];
  autocancelTimeValue: number;
  cancelThresholdTimeValue: number;
  vicinityDistanceValue: number;

  constructor(private settingsService: SettingsService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.settingsService.getConfigurations().subscribe(response => {
      // tslint:disable-next-line: no-string-literal
      this.configurations = response['data'];
      console.log('Response is ', this.configurations);
      this.configurations.map(configList => {
        if (configList.name === 'autocancelTime') {
          this.autocancelTimeValue = configList.value;
        }
        if (configList.name === 'cancelThresholdTime') {
          this.cancelThresholdTimeValue = configList.value;
        }
        if (configList.name === 'vicinityDistance') {
          this.vicinityDistanceValue = configList.value;
        }
      });
    });
  }

  onChange(name: string, value: number) {
    this.settingsService.updateConfigurationByName(name, value).subscribe(response => {
      this.notificationService.success('Updated successfully!!');
      console.log('Response of updated time: ', response);
    },
      error => {
        if (error.status === 400) {
          this.notificationService.warn('Updation Failed!!');
        }
      });
  }

}

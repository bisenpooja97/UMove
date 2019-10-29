import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from './service/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  autocancelTimeValue: number;
  cancelThresholdTimeValue: number;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getConfigurationByName('autocancelTime').subscribe(response => {
      // tslint:disable-next-line: no-string-literal
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
      console.log('Response of updated time: ', response);
    });
  }

}

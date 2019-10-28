import { Component, OnInit } from '@angular/core';
import { SettingsService } from './service/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  autocancelTimeValue: number;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getConfigurationByName('autocancelTime').subscribe(response => {
      console.log('Response of autocancel time value: ', response);
      this.autocancelTimeValue = response.value;
    });
  }

}

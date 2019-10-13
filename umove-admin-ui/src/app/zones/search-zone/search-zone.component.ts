import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Zone } from 'src/app/model/zone';

@Component({
  selector: 'app-search-zone',
  templateUrl: './search-zone.component.html',
  styleUrls: ['./search-zone.component.css']
})
export class SearchZoneComponent implements OnInit {

  // dataSource = new MatTableDataSource();
  @Input() zones: Zone[];

  constructor() { }

  ngOnInit() {
  }

  search(value: string) {
    
  }

}

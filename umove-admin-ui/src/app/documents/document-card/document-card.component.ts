import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.css']
})
export class DocumentCardComponent implements OnInit {
@Input() documents: Document;
  id: object;
  documentStatus: object;
  dLicenceNumber: object;
  expiryDate: Date;
  image: object;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ok() {
    console.log('ok', this.id);
    this.router.navigate(['users/', this.id]);
    }

}

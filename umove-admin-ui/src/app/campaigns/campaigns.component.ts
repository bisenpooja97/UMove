import { Component, OnInit, ViewChild } from '@angular/core';
import { CampaignsService } from './service/campaigns.service';
import { MatPaginator, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { Campaign } from './model/campaign';



@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})

export class CampaignsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  campaigns: Campaign;


  p = 1;
  dataSource = new MatTableDataSource();


  constructor(private campaignservice: CampaignsService, private matDialog: MatDialog) { }

  ngOnInit() {
    this.campaignservice.getCampaigns().subscribe(res => { this.campaigns = res.data;
                                                           console.log(res, 'parent');
  });

}

add() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '45%';
  const dRef = this.matDialog.open(AddCampaignComponent, dialogConfig);

  dRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
      this.campaignservice.addCampaign(result)
          .subscribe(
            response => {
              // this.notificationService.success(' Campaign Added successfully');
              this.getCampaignsInfo();
            }
            
            ); }

     });
}
  getCampaignsInfo() {
    return this.campaignservice.getCampaigns().subscribe(res => {
      this.campaigns = res.data;
  });
}}

import {Component, Input, AfterContentInit, OnInit, OnDestroy} from '@angular/core';
import {AppService} from '../app.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-infobox',
  template: `
    <mat-card tabindex="-1">
      <mat-card-header>
        <mat-card-title matTooltip="Click on a node!" matTooltipPosition="after"><h4 mat-line>Node Info</h4></mat-card-title>
      </mat-card-header>

      <mat-card-content>
        <hr class="style-eight" matTooltip="Node info displayed below!" matTooltipPosition="after">
        <div *ngIf="message">

        <mat-list dense>
          <mat-list-item>
            <p mat-line>
              Url: <a href = "{{message.entity.url}}" >{{ message.entity.url }}</a>
            </p></mat-list-item>
          <mat-list-item>
            <p>
              PageRank: {{message.entity.rank.toFixed(6)}}
            </p></mat-list-item>
          <mat-list-item><p>Alias: {{message.entity.id}}.html</p></mat-list-item>
          <mat-list-item><p>Color: {{message.entity.color}}</p></mat-list-item>
          <mat-list-item><p>In-Links: {{message.entity.inLinksCount}}</p></mat-list-item>
          <mat-list-item><p>Out-Links: {{message.entity.outLinksCount}}</p></mat-list-item>


        </mat-list>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./infobox.component.css']

})
export class InfoboxComponent implements OnDestroy {
  message: any;
  subscription: Subscription;

  constructor (private appService: AppService) {
    this.subscription = this.appService.getMessage().subscribe(message => {
      console.log(message);
      this.message = message; });
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

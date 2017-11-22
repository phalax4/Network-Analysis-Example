import {Component, Input, AfterContentInit, OnInit, OnDestroy} from '@angular/core';
import {AppService} from '../app.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-infobox',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title><h4>Node Information</h4></mat-card-title>
      </mat-card-header>

      <mat-card-content>
        <hr class="style-eight">
        <div *ngIf="message">
        <p>
          <a href = "{{message.entity.url}}" >{{ message.entity.url }}</a>
        </p>
        <mat-list>
          <mat-list-item>
            <p>
              PageRank:
            </p></mat-list-item>
          <mat-list-item><p>Alias: </p></mat-list-item>
          <mat-list-item><p>Color: </p></mat-list-item>
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

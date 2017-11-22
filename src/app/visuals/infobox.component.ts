import {Component, Input, AfterContentInit, OnInit, OnDestroy} from '@angular/core';
import {AppService} from '../app.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-infobox',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Node Information</mat-card-title>
      </mat-card-header>
      <mat-card-content *ngIf="message">
        <p>
          <a href = "{{message.text}}" >{{ message.text }}</a>
        </p>
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

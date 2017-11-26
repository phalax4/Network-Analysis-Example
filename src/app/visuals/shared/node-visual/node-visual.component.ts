import { Component, Input, AfterContentInit } from '@angular/core';
import { Node } from '../../../d3';
import {AppService} from '../../../app.service';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle
          class="node"
          [attr.fill]="this.color"
          cx="0"
          cy="0"
          [attr.r]="this.r"
          (click)="this.onClick()">
      </svg:circle>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent implements AfterContentInit {
  @Input('nodeVisual') node: Node;
  ngAfterContentInit () {
     // console.log(this.node);
    // console.log(this.node.r);
  }

  constructor (private appService: AppService) {

  }

  get r() {
    return Math.log2(this.node.rank * 5000);
  }

  get color() {
    return this.node.color;
  }

  get inLinksCount() {
    return this.node.inLinksCount;
  }
  get outLinksCount() {
    return this.node.outLinksCount;
  }

  onClick() {
    console.log(this.node);
    this.appService.sendMessage(this.node);
  }

  clearMessage(): void {
    // clear message
    this.appService.clearMessage();
  }

  /*
   <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.id}}
      </svg:text>
   */
}

import { Component, Input, AfterContentInit } from '@angular/core';
import { Node } from '../../../d3';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';

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

  get r() {
    return Math.log2(this.node.rank * 10000);
  }

  get color() {
    // return d3.schemeCategory20[Math.round(Math.random() * (20 - 0) + 0)];
    return this.node.color;
  }

  onClick() {
    console.log(this.node);
  }

  /*
   <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.id}}
      </svg:text>
   */
}

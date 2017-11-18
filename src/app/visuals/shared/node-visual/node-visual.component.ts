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
          [attr.r]="this.r">
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
    //const cc = d3Scale.scaleOrdinal(d3.schemeCategory20);

    // console.log(cc('0.004'));
     console.log();
    return d3.schemeCategory20[Math.round(Math.random() * (20 - 0) + 0)];
  }

  /*
   <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.id}}
      </svg:text>
   */
}

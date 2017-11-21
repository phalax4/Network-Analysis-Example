import { Component, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: '[nodeVisual]',
  template: `    
  `,
  styleUrls: ['./node-visual.component.css']
})
export class InfoboxComponent implements AfterContentInit {
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

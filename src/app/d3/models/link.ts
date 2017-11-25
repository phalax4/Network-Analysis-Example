import { Node } from './';

export class Link implements d3.SimulationLinkDatum<Node> {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;

  // must - defining enforced implementation properties
  source: any; // Node | string | number;
  target: any; // Node | string | number;

  constructor(source, target) {
    this.source = source;
    this.target = target;
  }
}

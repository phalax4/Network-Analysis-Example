import {Component, DoCheck} from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';
import { AppService } from './app.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  nodes: Node[] = [];
  links: Link[] = [];

  nodesTest$: Node[];
  linksTest$: Link[];

  constructor(appService: AppService, private http: HttpClient) {
    const N = APP_CONFIG.N,
          getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }

    this.http.get('assets/pagerank.json').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data['nodes']);
      this.nodesTest$ = data['nodes'];
      this.linksTest$ = data['links'];
    });
  }

}

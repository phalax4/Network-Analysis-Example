import {OnInit, Component, DoCheck} from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';
import { AppService } from './app.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  nodes$: Observable<Node[]>;
  links$: Observable<Link[]>;

  nodesTest$: Node[] = [];
  linksTest$: Link[] = [];

  private _opened: boolean = true;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor(appService: AppService, private http: HttpClient) {

    this.http.get('assets/pagerank-200.json').subscribe(data => {
      // Read the result field from the JSON response.
      // console.log(data['nodes']);
      this.nodes$ = data['nodes'];
      this.links$ = data['links'];
      // this.linksTest = data['links'];

      // console.log(this.nodes);
    });
  }

  ngOnInit () {
    AOS.init();
  }

}

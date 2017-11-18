import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Component, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Node, Link } from './d3';

@Injectable()
export class AppService {

  nodes$: Observable<Node[]>;
  links$: Observable<Link[]>;
  constructor(private http: HttpClient) {

  }

  getNodes (): void {
    this.http.get('assets/pagerank.json').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data['nodes']);
      return data['nodes'];
    });
  }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>('assets/pagerank.json')
    /*
      return this.http.get('assets/pagerank.json').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data['links']);
      return data['links'];
    });
    */
  }

}

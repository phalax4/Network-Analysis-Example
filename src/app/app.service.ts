import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Component, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Node, Link } from './d3';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AppService {
  private subject = new Subject<any>();

  constructor() { }
  sendMessage(message: any) {
    this.subject.next({ entity: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}

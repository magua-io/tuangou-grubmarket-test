import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Jsonp, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';

import { HttpClient } from 'app/shared/http-client.service';

import { Deal } from './deal.model';

@Injectable()
export class DealService {

  dealsChanged = new Subject<Deal[]>();

  private deals: Deal[] = [];

  constructor(private jsonp: Jsonp, private http: Http) {}

  getDeals() {
    return this.deals.slice();
  }

  getDeal(index: number) {
    return this.deals[index];
  }

  setDeals(deals: Deal[]) {
    this.deals = deals;
    this.dealsChanged.next(this.deals.slice());
  }

  fetchDeals() {

    this.http.get('https://tuangou.grubmarket.com/api/deals', {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer c2669247-877e-4eac-aaba-d8de5569af7d',
        'Accept-Language': 'zh-CN'
      })
    })
      .map(
        (response: Response) => {
          console.log("response: ", response.json());
          const deals: Deal[] = response.json()['content'];
          console.log("Got deals: ", deals);
          return deals;
        }
      )
      .subscribe(
        (deals: Deal[]) => {
          this.setDeals(deals);
        }
      );
  }

  private handleServerError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }



}
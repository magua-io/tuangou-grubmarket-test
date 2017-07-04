import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Jsonp, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';

import { HttpClient } from 'app/shared/http-client.service';

import { Deal } from './deal.model';

@Injectable()
export class DealService {

  dealsChanged = new Subject<Deal[]>();

  dealChanged = new Subject<Deal>();

  private deals: Deal[] = [];

  fetchedDeal: Deal;

  page: number = 0;

  isFetching: boolean = false;

  showOnlyOfficial: boolean = false;

  showOnlyActive: boolean = false;

  noMoreDeals: boolean = false;

  constructor(private jsonp: Jsonp, private http: Http, private router: Router) {}

  getDeals() {
    return this.deals.slice();
  }

  getDeal(index: number) {
    return this.deals[index];
  }

  setDeals(deals: Deal[]) {
    this.deals = deals;
    this.dealsChanged.next(this.deals.slice());
    this.isFetching = false;
  }

  addDeals(deals: Deal[]) {
    this.deals.push(...deals);
    this.dealsChanged.next(this.deals.slice());
    this.isFetching = false;
  }

  fetchDeals() {

    // reset page and noMoreDeals
    this.page = 0;
    this.noMoreDeals = false;

    this.http.get('https://tuangou.grubmarket.com/api/deals?' + 'official=' + this.showOnlyOfficial +  '&active=' + this.showOnlyActive, {
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

  fetchDeal(id: string) {
    this.http.get('https://tuangou.grubmarket.com/api/deals/' + id, {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer c2669247-877e-4eac-aaba-d8de5569af7d',
        'Accept-Language': 'zh-CN'
      })
    })
      .map(
        (response: Response) => {
          console.log("response: ", response.json());
          const deal: Deal = response.json();
          console.log("Got deals: ", deal);
          return deal;
        }
      )
      .catch(
        (error: Response) => {
          console.log("fetch deals error");
          this.router.navigate(['/deals']);
          return Observable.throw(error);
        }
      )
      .subscribe(
        (deal: Deal) => {
          this.dealChanged.next(deal);
        }
      ); 
  }

  fetchMoreDeals() {
    this.page += 1;
    this.isFetching = true;
    console.log("page: ", this.page);
    this.http.get('https://tuangou.grubmarket.com/api/deals?' + 'official=' + this.showOnlyOfficial +  '&active=' + this.showOnlyActive + '&page=' + this.page, {
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
          if (deals.length == 0) {
            console.log("No more deals");
            this.noMoreDeals = true;
          }
          return deals;
        }
      )
      .subscribe(
        (deals: Deal[]) => {
          this.addDeals(deals);
        }
      );
  }

  

  private handleServerError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

  toggleShowOnlyOfficial() {
    this.showOnlyOfficial = !this.showOnlyOfficial;
  }

  toggleShowOnlyActive() {
    this.showOnlyActive = !this.showOnlyActive;
  }


}
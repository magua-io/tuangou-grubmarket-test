import { Component, OnInit, OnDestroy, AfterViewChecked, ViewChild, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';


import { Deal } from '../deal.model';
import { DealService } from '../deal.service';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {

  deals: Deal[];
  subscription: Subscription;

  constructor(private dealService: DealService) { }

  ngOnInit() {
    this.subscription = this.dealService.dealsChanged.subscribe(
      (deals: Deal[]) => {
        this.deals = deals;
        console.log("Succesffuly got deals: ", this.deals);
      }
    );
    this.dealService.fetchDeals();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

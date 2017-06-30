import { Component, OnInit, OnDestroy } from '@angular/core';
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
      }
    );
    this.dealService.fetchDeals();
    console.log("Succesffuly got deals: ", this.deals);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

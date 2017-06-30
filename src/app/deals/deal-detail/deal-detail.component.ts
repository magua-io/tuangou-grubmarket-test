import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DealService } from '../deal.service';

import { Deal } from '../deal.model';

@Component({
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.css']
})
export class DealDetailComponent implements OnInit {

  subscription: Subscription;

  deal: Deal;
  id: string;

  constructor(
    private dealService: DealService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.dealService.dealChanged.subscribe(
      (deal: Deal) => {
        this.deal = deal;
        console.log("Succesffuly got deals: ", this.deal);
      }
    );

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.dealService.fetchDeal(this.id);
      }
    )
  }

}

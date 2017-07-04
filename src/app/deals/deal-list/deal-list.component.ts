import { Component, OnInit, OnDestroy, AfterViewChecked, ViewChild, HostListener, Inject, ElementRef } from '@angular/core';
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

  @ViewChild('dealList') private dealList: ElementRef;

  deals: Deal[];
  subscription: Subscription;

  page: number = 0;

  constructor(private dealService: DealService) { }

  ngOnInit() {
    this.deals = this.dealService.getDeals();

    this.subscription = this.dealService.dealsChanged.subscribe(
      (deals: Deal[]) => {
        this.deals = deals;
        console.log("Succesffuly got deals: ", this.deals);
      }
    );

    if (this.deals && this.deals.length != 0) {
      console.log("deal-list deals.length: ", this.deals.length);
    } else {
      console.log("deal is null");  
      this.dealService.fetchDeals();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = document.body.scrollTop;
    let max = this.dealList.nativeElement.scrollHeight;
    if (max - pos < 1000 && !this.dealService.isFetching) {
      this.dealService.fetchMoreDeals();
    }
  }

}

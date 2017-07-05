import { Component, OnInit, Input } from '@angular/core';

import { TimeService } from 'app/shared/time.service';

@Component({
  selector: 'app-deal-order',
  templateUrl: './deal-order.component.html',
  styleUrls: ['./deal-order.component.css']
})
export class DealOrderComponent implements OnInit {

  @Input()order: any
  avatarPath: string;

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.avatarPath = this.order.owner.profileImage || 'assets/default_profile.svg';
  }

  getTimeToNow(timestamp: number) {
    return this.timeService.fromNow(timestamp);
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { TimeService } from 'app/shared/time.service';

import { Deal } from '../../deal.model';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  @Input() deal: Deal;
  @Input() index: number;

  constructor(private timeService: TimeService) { }

  ngOnInit() {
  }

  getDate(timestamp: number) {
    return this.timeService.timestampToDate(timestamp);
  }

}

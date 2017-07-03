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
  @Input() id: string;

  avatarPath: string;
  imagePath: string;

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.avatarPath = this.deal.owner.profileImage || 'assets/default_profile.svg';
    this.imagePath = this.deal.dealItems[0].imagePath
  }

  getDate(timestamp: number) {
    return this.timeService.timestampToDate(timestamp);
  }

}

import { Component, OnInit } from '@angular/core';

import { DealService } from '../deal.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  onlyOfficialTuangou = false;
  onlyActiveTuangou = false;

  constructor(private dealService: DealService) { }

  ngOnInit() {
    this.onlyOfficialTuangou = this.dealService.showOnlyOfficial;
    this.onlyActiveTuangou = this.dealService.showOnlyActive;
  }

  onToggleOnlyOfficialTuangou(event) {
    event.stopPropagation();
    this.onlyOfficialTuangou = !this.onlyOfficialTuangou;
    this.dealService.toggleShowOnlyOfficial();
  }

  
  onToggleOnlyActiveTuangou(event) {
    event.stopPropagation();
    this.onlyActiveTuangou = !this.onlyActiveTuangou;
    this.dealService.toggleShowOnlyActive();
  }

  countFilters(): number {
    let num1 = this.onlyOfficialTuangou ? 1 : 0;
    let num2 = this.onlyActiveTuangou ? 1 : 0;
    return num1 + num2;
  }

  onApplyFilters() {
    console.log("Applied filters");
    this.dealService.fetchDeals();
  }


}

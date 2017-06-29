import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  onlyOfficialTuangou = false;
  onlyActiveTuangou = false;

  constructor() { }

  ngOnInit() {
  }

  onToggleOnlyOfficialTuangou(event) {
    event.stopPropagation();
    this.onlyOfficialTuangou = !this.onlyOfficialTuangou;
  }

  
  onToggleOnlyActiveTuangou(event) {
    event.stopPropagation();
    this.onlyActiveTuangou = !this.onlyActiveTuangou;
  }

  countFilters(): number {
    let num1 = this.onlyOfficialTuangou ? 1 : 0;
    let num2 = this.onlyActiveTuangou ? 1 : 0;
    return num1 + num2;
  }

  onApplyFilters() {
    console.log("Applied filters");
  }


}

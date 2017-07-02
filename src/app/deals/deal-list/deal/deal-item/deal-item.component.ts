import { Component, OnInit, Input } from '@angular/core';

import { DealItem } from '../../../deal-item.model';

@Component({
  selector: 'app-deal-item',
  templateUrl: './deal-item.component.html',
  styleUrls: ['./deal-item.component.css']
})
export class DealItemComponent implements OnInit {
  
  @Input() dealItem: DealItem;
  
  amount:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    if (this.dealItem.available) {
      if (this.amount < this.dealItem.available) {
        this.amount += 1;
      }
    } else {
      this.amount += 1;
    }
    


  }

  onMinus() {
    if (this.amount > 0) {
      this.amount -= 1;
    }
  }

}

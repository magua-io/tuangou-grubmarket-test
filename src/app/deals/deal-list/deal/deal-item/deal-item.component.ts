import { Component, OnInit, Input } from '@angular/core';
import {MdDialog} from '@angular/material';

import { DealItem } from '../../../deal-item.model';

import { DealItemImageModal } from './deal-item-image-modal.component';
import { DealItemDescriptionModal } from './deal-item-description-modal.component';

@Component({
  selector: 'app-deal-item',
  templateUrl: './deal-item.component.html',
  styleUrls: ['./deal-item.component.css']
})
export class DealItemComponent implements OnInit {
  
  @Input() dealItem: DealItem;
  
  amount:number = 0;

  constructor(public dialog: MdDialog) { }

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

  onOpenImageModal() {
    this.dialog.open(DealItemImageModal, {
      data: {
        title: this.dealItem.title,
        imagePath: this.dealItem.imagePath,
      }
    });
  }

  onOpenDescriptionModal() {
    this.dialog.open(DealItemDescriptionModal, {
      data: {
        title: this.dealItem.title,
        description: this.dealItem.description
      }
    });
  }

}

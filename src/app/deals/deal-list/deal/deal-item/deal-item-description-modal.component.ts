import { Component, Inject } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-deal-item-description-modal',
  templateUrl: './deal-item-description-modal.html',
  styleUrls: ['./deal-item-description-modal.css']
})
export class DealItemDescriptionModal {
  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
  }
}

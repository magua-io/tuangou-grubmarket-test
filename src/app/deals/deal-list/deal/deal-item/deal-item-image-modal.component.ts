import { Component, Inject } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-deal-item-image-modal',
  templateUrl: './deal-item-image-modal.html',
  styleUrls: ['./deal-item-image-modal.css']
})
export class DealItemImageModal {
  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
  }
}

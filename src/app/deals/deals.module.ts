import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDialogModule, MdProgressSpinnerModule } from '@angular/material';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { DealsRoutingModule } from './deals-routing.module';

import { DealsComponent } from './deals.component';
import { DealListComponent } from './deal-list/deal-list.component';
import { DealComponent } from './deal-list/deal/deal.component';
import { DealItemComponent } from './deal-list/deal/deal-item/deal-item.component';
import { DealDetailComponent } from './deal-detail/deal-detail.component';
import { FilterComponent } from './filter/filter.component';
import { DealItemImageModal } from './deal-list/deal/deal-item/deal-item-image-modal.component';
import { DealItemDescriptionModal } from './deal-list/deal/deal-item/deal-item-description-modal.component';

import { DropdownDirective } from '../shared/dropdown.directive';

@NgModule({
  declarations: [
    DealsComponent,
    DealListComponent,
    DealComponent,
    DealItemComponent,
    DealDetailComponent,
    FilterComponent,
    DropdownDirective,
    DealItemImageModal,
    DealItemDescriptionModal
  ],
  imports: [
    CommonModule,
    DealsRoutingModule,
    LazyLoadImageModule,
    MdDialogModule,
    MdProgressSpinnerModule
  ],
  entryComponents: [ 
    DealItemImageModal,
    DealItemDescriptionModal
  ],
  providers: [],
  exports: []
})
export class DealsModule {

}
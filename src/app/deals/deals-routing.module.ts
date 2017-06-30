import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealsComponent } from './deals.component';
import { DealListComponent } from './deal-list/deal-list.component';
import { DealDetailComponent } from './deal-detail/deal-detail.component';


const dealsRoutes: Routes = [
  { path: '', component: DealsComponent, children: [
    { path: '', component: DealListComponent },
    { path: ':id', component: DealDetailComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(dealsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DealsRoutingModule {

}


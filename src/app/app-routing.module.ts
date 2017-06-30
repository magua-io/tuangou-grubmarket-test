import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DealsComponent } from './deals/deals.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'deals', loadChildren: './deals/deals.module#DealsModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DealsModule } from './deals/deals.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { DealService } from './deals/deal.service';
import { requestOptionsProvider } from './shared/http-client.service';
import { TimeService } from './shared/time.service';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogsComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    DealsModule,
    BrowserAnimationsModule
  ],
  providers: [ DealService, requestOptionsProvider, TimeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

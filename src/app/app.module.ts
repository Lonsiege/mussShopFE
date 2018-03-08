import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MusshopHomeComponent } from './musshop-home/musshop-home.component';
import { MusshopItemsComponent } from './musshop-items/musshop-items.component';
import {ItemsService} from './service/getItems';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ChoiceComponent } from './choice/choice.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import {SaleService} from './service/sendCart';
import { BestsellerComponent } from './bestseller/bestseller.component';
import {BestSellService} from './service/getBestsell';


@NgModule({
  declarations: [
    AppComponent,
    MusshopHomeComponent,
    MusshopItemsComponent,
    ChoiceComponent,
    CartitemComponent,
    BestsellerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ItemsService, SaleService, BestSellService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

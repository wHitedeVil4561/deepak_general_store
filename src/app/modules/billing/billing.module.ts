import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { WholeSaleComponent } from './components/whole-sale/whole-sale.component';
import { RetailSaleComponent } from './components/retail-sale/retail-sale.component';


@NgModule({
  declarations: [
    WholeSaleComponent,
    RetailSaleComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }

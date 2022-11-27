import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRecordRoutingModule } from './customer-record-routing.module';
import { CustomersListingComponent } from './components/customers-listing/customers-listing.component';
import { CustomerHistoryComponent } from './components/customer-history/customer-history.component';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';


@NgModule({
  declarations: [
    CustomersListingComponent,
    CustomerHistoryComponent,
    PaymentModalComponent
  ],
  imports: [
    CommonModule,
    CustomerRecordRoutingModule
  ]
})
export class CustomerRecordModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';
import { ContainerComponent } from './container/container.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerRecordModule } from '../modules/customer-record/customer-record.module';
import { BillingModule } from '../modules/billing/billing.module';
import { DashboardModule } from '../modules/dashboard/dashboard.module';


@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    SharedModule,
    CustomerRecordModule,
    BillingModule,
    DashboardModule
  ]
})
export class ThemeModule { }

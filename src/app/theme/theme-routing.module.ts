import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path:'',
    component:ContainerComponent,
    children:[
      {
        path:'customer',
        loadChildren:()=>import('../modules/customer-record/customer-record.module').then(m=>m.CustomerRecordModule)
      },
      {
        path:'billing',
        loadChildren:()=>import('../modules/billing/billing.module').then(m=>m.BillingModule)
      },
      {
        path:'billing',
        loadChildren:()=>import('../modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
      {
        path:'billing',
        loadChildren:()=>import('../modules/inventory/inventory.module').then(m=>m.InventoryModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DeleteModalComponent,
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    DeleteModalComponent,
    ConfirmationModalComponent
  ]
})
export class SharedModule { }

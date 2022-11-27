import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { FilterComponent } from './components/filter/filter.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    HeaderComponent,
    DeleteModalComponent,
    ConfirmationModalComponent,
    FilterComponent,
  ],
  imports: [CommonModule,NgSelectModule],
  exports: [
    HeaderComponent,
    DeleteModalComponent,
    ConfirmationModalComponent,
    FilterComponent,
  ],
})
export class SharedModule {}

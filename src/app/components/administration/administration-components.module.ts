import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionHistoryComponent } from './action-history/action-history.component';
import { AdminModalComponent } from './admin-modal/admin-modal.component';
import { AdminSelectorComponent } from './admin-selector/admin-selector.component';
import { ActionEditResourceComponent } from './action-edit-resource/action-edit-resource.component';
import { FormsModule } from '@angular/forms';
import { ActionNewResourceComponent } from './action-new-resource/action-new-resource.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CardComponent } from '../card/card.component';



@NgModule({
  declarations: [
    ActionHistoryComponent,
    AdminModalComponent,
    AdminSelectorComponent,
    ActionEditResourceComponent,
    ActionNewResourceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    PipesModule
  ],
  exports: [
    ActionHistoryComponent,
    ActionEditResourceComponent,
    ActionNewResourceComponent
  ]
})
export class AdministrationComponentsModule { }

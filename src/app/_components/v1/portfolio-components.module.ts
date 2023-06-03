import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDefaultComponent } from './input-text/input-default.component';
import { TitleDefaultComponent } from './title-default/title-default.component';
import { ImageProfileComponent } from './image-profile/image-profile.component';
import { ButtonDefaultComponent } from './button-default/button-default.component';
import { AdminSelectorComponent } from './admin-selector/admin-selector.component';
import { AdminModalComponent } from './admin-modal/admin-modal.component';


@NgModule({
  declarations: [
    InputDefaultComponent,
    TitleDefaultComponent,
    ImageProfileComponent,
    ButtonDefaultComponent,
    AdminSelectorComponent,
    AdminModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputDefaultComponent,
    TitleDefaultComponent,
    ImageProfileComponent,
    ButtonDefaultComponent,
    AdminSelectorComponent,
    AdminModalComponent
  ]
})
export class PortfolioComponentsModule { }

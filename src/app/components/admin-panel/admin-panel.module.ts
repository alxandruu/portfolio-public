import { NgModule } from '@angular/core';
import { HomeAPComponent } from './home-ap.component';
import { CommonModule } from '@angular/common';
import { AdministrationComponentsModule } from '../administration/administration-components.module';
import { ResourcesAPComponent } from './resources-ap.component';

@NgModule({
    declarations: [
      HomeAPComponent,
      ResourcesAPComponent
    ],
    imports: [
      CommonModule,
      AdministrationComponentsModule
    ],
    exports:[
      HomeAPComponent,
      ResourcesAPComponent
    ]
  })
  export class AdminPanelComponentsModule { }
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { AdministrationComponentsModule } from '../shared/components/administration/administration-components.module';
import { CardComponent } from '../shared/components/card/card.component';
import { ListCardComponent } from '../shared/components/list-card/list-card.component';
import { ResourcesComponent } from './public/resources/resources.component';

@NgModule({
  declarations: [
    ResourcesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    AdministrationComponentsModule,
    CardComponent,
    ListCardComponent,
    CoreModule
  ],
  exports: [
    ResourcesComponent
  ]
})
export class PagesModule { }

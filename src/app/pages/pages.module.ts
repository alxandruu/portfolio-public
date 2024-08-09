import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './public/login/login.component';
import { ProjectsComponent } from './public/projects/projects.component';

import { ResourcesComponent } from './public/resources/resources.component';
import { ProjectViewComponent } from './public/projects/project_view/project-view.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { CardComponent } from '../shared/components/card/card.component';
import { AdministrationComponentsModule } from '../shared/components/administration/administration-components.module';
import { ListCardComponent } from '../shared/components/list-card/list-card.component';

@NgModule({
  declarations: [
    LoginComponent,
    ProjectsComponent,
    ResourcesComponent,
    ProjectViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CardComponent,
    AdministrationComponentsModule,
    CardComponent,
    ListCardComponent,
    CoreModule
  ],
  exports: [
    LoginComponent,
    ProjectsComponent,
    ResourcesComponent
  ]
})
export class PagesModule { }

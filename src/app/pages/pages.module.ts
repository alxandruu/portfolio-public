import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './public/home/home.component';
import { ProjectsComponent } from './public/projects/projects.component';
import { CVComponent } from './public/cv/cv.component';
import { ResourcesComponent } from './public/resources/resources.component';
import { ProjectViewComponent } from './public/projects/project_view/project-view.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AdministrationComponentsModule } from '../components/administration/administration-components.module';
import { AdminPanelComponentsModule } from '../components/admin-panel/admin-panel.module';
import { GeneralComponentsModule } from '../components/general/general-components.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ProjectsComponent,
    CVComponent,
    ResourcesComponent,
    ProjectViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    AdministrationComponentsModule,
    AdminPanelComponentsModule,
    GeneralComponentsModule,
    PipesModule,
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    ProjectsComponent,
    CVComponent,
    ResourcesComponent
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CVComponent } from './cv/cv.component';
import { ResourcesComponent } from './resources/resources.component';
import { CardComponent } from './resources/viewer/card/card.component';
import { ListComponent } from './resources/viewer/list/list.component';
import { ActionHistoryComponent } from './home/admin-panel/action-history/action-history.component';
import { AdminPanelComponent } from './home/admin-panel/admin-panel.component';
import { NewResourceComponent } from './resources/admin-panel/new-resource/new-resource.component';
import { ResourcesAdminPanelComponent } from './resources/admin-panel/admin-panel.component';
import { EditResourceComponent } from './resources/admin-panel/edit-resource/edit-resource.component';
import { PrViewComponent } from './projects/pr-view/pr-view.component';
import { PrComponent } from './projects/pr/pr.component';
import { ResourceFilterPipe } from './resources/pipes/resourceFilter.pipe';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PortfolioComponentsModule } from '../_components/v1/portfolio-components.module';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ProjectsComponent,
    CVComponent,
    ResourcesComponent,
    CardComponent,
    ListComponent,
    ActionHistoryComponent,
    AdminPanelComponent,
    NewResourceComponent,
    ResourcesAdminPanelComponent,
    EditResourceComponent,
    PrComponent,
    PrViewComponent,    
    ResourceFilterPipe,
    //Refactor ->

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    PortfolioComponentsModule
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    ProjectsComponent,
    CVComponent,
    ResourcesComponent
  ]
})
export class PortfolioPagesModule { }

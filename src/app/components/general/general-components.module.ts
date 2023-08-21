import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleDefaultComponent } from './title-default/title-default.component';
import { ResourceCardComponent } from './resource-card/resource-card.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { InputDefaultComponent } from './input-default/input-default.component';
import { ImageProfileComponent } from './image-profile/image-profile.component';
import { ButtonDefaultComponent } from './button-default/button-default.component';



@NgModule({
  declarations: [
    TitleDefaultComponent,
    ResourceCardComponent,
    ResourceListComponent,
    ProjectCardComponent,
    InputDefaultComponent,
    ImageProfileComponent,
    ButtonDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TitleDefaultComponent,
    ResourceCardComponent,
    ResourceListComponent,
    ProjectCardComponent,
    InputDefaultComponent,
    ImageProfileComponent,
    ButtonDefaultComponent
  ]
})
export class GeneralComponentsModule { }

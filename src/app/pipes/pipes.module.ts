import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceFilterPipe } from './resource-filter.pipe';



@NgModule({
  declarations: [
    ResourceFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResourceFilterPipe
  ]
})
export class PipesModule { }

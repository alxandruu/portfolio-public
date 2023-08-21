import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceFilterPipe } from './resource-filter.pipe';
import { TimestampDefaultStringPipe } from './default-functions.pipe';


@NgModule({
  declarations: [
    ResourceFilterPipe,
    TimestampDefaultStringPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResourceFilterPipe,
    TimestampDefaultStringPipe
  ]
})
export class PipesModule { }

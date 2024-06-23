import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimestampStringPipe } from './pipes/timestamp-string.pipe';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [
    TimestampStringPipe,
    CategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimestampStringPipe,
    CategoryPipe
  ]
})
export class CoreModule { }

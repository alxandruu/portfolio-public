import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/interfaces';

@Component({
  selector: 'ap-resources',
  template: `
    <admin-action-new-resource [categories]=categories></admin-action-new-resource>
    <admin-action-edit-resource [categories]=categories style="position:relative; top:3.5rem"></admin-action-edit-resource>
  `
})

export class ResourcesAPComponent {
  @Input() categories: Category[] = [];

}

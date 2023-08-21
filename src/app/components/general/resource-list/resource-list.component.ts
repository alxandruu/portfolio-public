import { Component, Input } from '@angular/core';
import { Resource } from 'src/app/models/interfaces';

@Component({
  selector: 'resource-list[resource]',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent {
  @Input() resource!: Resource;

}

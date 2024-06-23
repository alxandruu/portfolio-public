import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Resource } from 'src/app/models/interfaces/resource';

@Component({
  selector: 'resource-list[resource]',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent {
  @Input() resource!: Resource;

}

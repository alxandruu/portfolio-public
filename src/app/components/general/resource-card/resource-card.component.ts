import { Component, Input } from '@angular/core';
import { Resource } from 'src/app/models/interfaces';

@Component({
  selector: 'resource-card[resource]',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss']
})
export class ResourceCardComponent {
  @Input() resource!: Resource;

}

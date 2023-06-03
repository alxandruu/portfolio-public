import { Component, Input } from '@angular/core';
import { Resource } from 'src/app/_models/resource';

@Component({
  selector: 'viewer-card[resource]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() resource!: Resource;

}

import { Component, Input } from '@angular/core';
import { Resource } from 'src/app/_models/resource';

@Component({
  selector: 'viewer-list[resource]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() resource!: Resource;

}

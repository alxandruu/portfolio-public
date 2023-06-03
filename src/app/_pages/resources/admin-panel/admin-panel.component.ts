import { Component, Input } from '@angular/core';
import { Category } from 'src/app/_models/category';


@Component({
  selector: 'resources-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})

export class ResourcesAdminPanelComponent {
  @Input() categories: Category[] = [];

}

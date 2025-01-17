import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal/portal.service';

@Component({
  selector: 'component-loading-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-loading-icon.component.html',
  styleUrls: ['./theme-loading-icon.component.scss']
})
export class ThemeLoadingIconComponent {
  protected show: boolean = false;

  constructor(private portalSrv: PortalService) {
    this.portalSrv.observeShowLoadingIcon().subscribe(data => {
      this.show = data;
    })
  }
}


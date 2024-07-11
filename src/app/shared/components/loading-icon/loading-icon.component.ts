import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal/portal.service';

@Component({
  selector: 'component-loading-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.scss']
})
export class LoadingIconComponent {
  protected show: boolean = false;

  constructor(private portalSrv: PortalService) {
    this.portalSrv.observeShowLoadingIcon().subscribe(data => {
      this.show = data;
    })
  }
}


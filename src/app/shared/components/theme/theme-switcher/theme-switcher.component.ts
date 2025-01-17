import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal/portal.service';

@Component({
  selector: 'component-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="changeThemeScheme()" class="button-unstyled">
      <span *ngIf="scheme == 'dark'">
          <i class="fas fa-sun cursor-pointer"></i>
      </span>
      <span *ngIf="scheme == 'light'">
          <i class="fas fa-moon cursor-pointer"></i>
      </span>
    </button>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ThemeSwitcherComponent {
  constantsPortal = PortalService
  scheme!: string;

  constructor(private portalSrv: PortalService) {
    this.portalSrv.getThemeScheme().subscribe(scheme => {
      this.scheme = scheme;
    })

  }

  changeThemeScheme() {
    if (PortalService.DARK_THEME_SCHEME == this.scheme)
      this.portalSrv.modifyThemeScheme(PortalService.LIGHT_THEME_SCHEME);
    else if (PortalService.LIGHT_THEME_SCHEME == this.scheme)
      this.portalSrv.modifyThemeScheme(PortalService.DARK_THEME_SCHEME);
  }
}

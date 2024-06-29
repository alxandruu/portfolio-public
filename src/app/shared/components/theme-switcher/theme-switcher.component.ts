import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal/portal.service';

@Component({
  selector: 'component-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  themeScheme!: string;

  constructor(private portalSrv: PortalService) {
    this.portalSrv.getThemeScheme().subscribe(scheme => {
      this.themeScheme = scheme;
    })

  }

  changeThemeScheme(scheme: string) {
    this.portalSrv.modifyThemeScheme(scheme);
  }

}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';
import { IconBedComponent } from '../icons/icon-bed/icon-bed.component';
import { PortalLinkComponent } from '../portal-link/portal-link.component';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';
import { PortalManagerService } from '../../services/portal-manager/portal-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, IconBedComponent, HamburgerMenuComponent, ThemeButtonComponent, PortalLinkComponent]
})
export class HeaderComponent {
  readonly portalManager = inject(PortalManagerService)

}

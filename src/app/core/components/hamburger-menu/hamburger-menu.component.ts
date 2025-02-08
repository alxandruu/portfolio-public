import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { fadeInOutAnimation } from 'src/app/core/animations/fade-in-out.animation';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { SelectorLanguageComponent } from 'src/app/shared/components/i18n/selector-language/selector-language.component';
import { NavigationPortalLinkComponent } from 'src/app/shared/components/navigation/navigation-portal-link/navigation-portal-link.component';
import { WNCRouterLink } from '../../types/web-navigation-config.interface';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';


@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
  standalone: true,
  imports: [CommonModule, ThemeButtonComponent, SelectorLanguageComponent, BrowserAnimationsModule, RouterModule, NavigationPortalLinkComponent],
  animations: [fadeInOutAnimation],
  encapsulation: ViewEncapsulation.None
})
export class HamburgerMenuComponent {
  showMenu: boolean = false;
  @Input() pages: Array<WNCRouterLink> = []

  constructor(protected i18s: I18nService) {
  }

  hideMenu() { this.showMenu = false }
}

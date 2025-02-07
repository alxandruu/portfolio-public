import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { fadeInOutAnimation } from 'src/app/shared/static/animations';
import { WNCHrefType, WNCRouterLink } from '../../../../core/models/interfaces/web-navigation-config';
import { ThemeButtonComponent } from '../../../../core/components/theme-button/theme-button.component';
import { SelectorLanguageComponent } from '../../i18n/selector-language/selector-language.component';
import { NavigationPortalLinkComponent } from '../navigation-portal-link/navigation-portal-link.component';


@Component({
  selector: 'navigation-hamburger',
  templateUrl: './navigation-hamburger.component.html',
  styleUrls: ['./navigation-hamburger.component.scss'],
  standalone: true,
  imports: [CommonModule, ThemeButtonComponent, SelectorLanguageComponent, BrowserAnimationsModule, RouterModule, NavigationPortalLinkComponent],
  animations: [fadeInOutAnimation],
  encapsulation: ViewEncapsulation.None
})
export class HamburgerNavigationComponent {
  showMenu: boolean;
  hrefTypes = WNCHrefType

  @Input() pages: Array<WNCRouterLink> = []

  constructor(protected i18s: I18nService) {
    this.showMenu = false;
  }


  hideMenu() {
    this.showMenu = false
  }
}

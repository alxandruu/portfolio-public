import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { fadeInOutAnimation } from 'src/app/core/animations/fade-in-out.animation';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { LanguageSelectorComponent } from 'src/app/core/components/language-selector/language-selector.component';
import { PortalLinkComponent } from 'src/app/core/components/portal-link/portal-link.component';
import { Page } from '../../types/page.interface';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';


@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
  standalone: true,
  imports: [CommonModule, ThemeButtonComponent, LanguageSelectorComponent, BrowserAnimationsModule, RouterModule, PortalLinkComponent],
  animations: [fadeInOutAnimation],
  encapsulation: ViewEncapsulation.None
})
export class HamburgerMenuComponent {
  showMenu: boolean = false;
  @Input() pages: Array<Page> = []

  constructor(protected i18s: I18nService) {
  }

  hideMenu() { this.showMenu = false }
}

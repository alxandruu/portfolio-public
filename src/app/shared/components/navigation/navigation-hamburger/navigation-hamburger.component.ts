import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ThemeSwitcherComponent } from '../../theme/theme-switcher/theme-switcher.component';
import { SelectorLanguageComponent } from '../../i18n/selector-language/selector-language.component';
import { fadeInOutAnimation } from 'src/app/shared/static/animations';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { WebNavigationConfig, WNCRouterLink } from '../../../../core/models/interfaces/web-navigation-config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'navigation-hamburger',
  templateUrl: './navigation-hamburger.component.html',
  styleUrls: ['./navigation-hamburger.component.scss'],
  standalone: true,
  imports: [CommonModule, ThemeSwitcherComponent, SelectorLanguageComponent, BrowserAnimationsModule],
  animations: [fadeInOutAnimation],
  encapsulation: ViewEncapsulation.None
})
export class HamburgerNavigationComponent {
  showMenu: boolean;

  @Input() pages: Array<WNCRouterLink> = []

  constructor(protected i18s: I18nService) {
    this.showMenu = false;
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { fadeInfadeOutAnimation } from '../../static/animations';
import { ButtonScrollTopComponent } from '../buttons/button-scroll-top/button-scroll-top.component';
import { SelectorLanguageComponent } from '../i18n/selector-language/selector-language.component';
import { WebNavigationConfig } from '../../../core/models/interfaces/web-navigation-config';
import { HamburgerNavigationComponent } from '../navigation/navigation-hamburger/navigation-hamburger.component';
import { ThemeSwitcherComponent } from '../theme/theme-switcher/theme-switcher.component';
import { PortalService } from 'src/app/core/services/portal/portal.service';

@Component({
  selector: 'component-navigation-menu',
  standalone: true,
  imports: [AppRoutingModule, CommonModule, BrowserAnimationsModule, ThemeSwitcherComponent, ButtonScrollTopComponent, SelectorLanguageComponent, HamburgerNavigationComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  animations: [
    fadeInfadeOutAnimation,
  ]
})
export class NavigationMenuComponent {
  showHamburguerMenu: boolean = false;
  wnc!: WebNavigationConfig;



  constructor(protected i18s: I18nService, private portalService: PortalService) {
    portalService.getPages().subscribe(config => {
      this.wnc = config
    })
  }




}







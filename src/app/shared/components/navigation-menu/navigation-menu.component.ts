import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { PortalService } from 'src/app/core/services/portal/portal.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeSwitcherComponent } from '../theme/theme-switcher/theme-switcher.component';
import { fadeInfadeOutAnimation } from '../../static/animations';
import { ButtonScrollTopComponent } from '../buttons/button-scroll-top/button-scroll-top.component';
import { SelectorLanguageComponent } from '../i18n/selector-language/selector-language.component';

@Component({
  selector: 'component-navigation-menu',
  standalone: true,
  imports: [AppRoutingModule, CommonModule, BrowserAnimationsModule, ThemeSwitcherComponent, ButtonScrollTopComponent, SelectorLanguageComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  animations: [
    fadeInfadeOutAnimation,
  ]
})
export class NavigationMenuComponent  {
  showHamburguerMenu: boolean = false;



  constructor(protected i18s: I18nService) {

  }


 

}







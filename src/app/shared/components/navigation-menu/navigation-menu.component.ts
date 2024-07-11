import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { PortalService } from 'src/app/core/services/portal/portal.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { fadeInfadeOutAnimation } from '../../static/animations';

@Component({
  selector: 'component-navigation-menu',
  standalone: true,
  imports: [AppRoutingModule, CommonModule, BrowserAnimationsModule, ThemeSwitcherComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  animations: [
    fadeInfadeOutAnimation,
  ]
})
export class NavigationMenuComponent implements OnInit {
  showHamburguerMenu: boolean = false;

  scrollY: number = 0;

  constructor(protected i18s: I18nService, protected portalSrv: PortalService) {

  }
  ngOnInit(): void {
    this.portalSrv.getScrollY().subscribe(s => {
      this.scrollY = s;
    })
  }


  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}




window.addEventListener('scroll', () => {
  if (window.scrollY < 250 || window.scrollY >= document.documentElement.scrollHeight) {
    document.querySelector('.scrollTopButton')?.classList.remove("active");
  }
  else {
    document.querySelector('.scrollTopButton')?.classList.add("active");
  }
})



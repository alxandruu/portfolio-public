import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { PortalService } from 'src/app/core/services/portal/portal.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'component-navigation-menu',
  standalone: true,
  imports: [AppRoutingModule, CommonModule, BrowserAnimationsModule],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  animations: [
    trigger(
      'fadeInOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('250ms ease-out',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('350ms ease-in',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class NavigationMenuComponent implements OnInit {
  showHamburguerMenu: boolean = false;
  themeScheme: string = '';
  scrollY: number = 0;

  constructor(protected i18next: I18nService, protected portalSrv: PortalService) {

  }
  ngOnInit(): void {
    this.portalSrv.getThemeScheme().subscribe(scheme => {
      this.themeScheme = scheme;
    })
    
    this.portalSrv.getScrollY().subscribe(s => {
      this.scrollY = s;
    })
  }

  changeThemeScheme(scheme: string) {
    this.portalSrv.modifyThemeScheme(scheme);
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



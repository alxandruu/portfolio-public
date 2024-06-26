import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthenticationService } from 'src/app/core/services/firebase-manager/authentication/authentication.service';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { PortalService } from 'src/app/core/services/portal.service';
import { WebsiteThemeService } from 'src/app/core/services/theme/website-theme.service';
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

  constructor(private authf: AuthenticationService, protected i18next: I18nService, private webTheme: WebsiteThemeService, private portalSrv: PortalService) {

  }
  ngOnInit(): void {
    this.portalSrv.getThemeScheme().subscribe(scheme => {
      this.themeScheme = scheme;
    })
  }


  protected logout(): void {

    this.authf.logout();
  }

  changeThemeScheme(scheme: string) {
    this.portalSrv.modifyThemeScheme(scheme);
  }

  //Getter & Setters
  protected get isLogged(): boolean {
    return this.authf.isLogged;
  }
}

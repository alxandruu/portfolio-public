import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthenticationService } from 'src/app/services/firebase-manager/authentication/authentication.service';
import { I18nService } from 'src/app/services/i18n/i18n.service';

@Component({
  selector: 'component-navigation-menu',
  standalone: true,
  imports: [AppRoutingModule, CommonModule],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {
  constructor(private authf: AuthenticationService, protected i18next: I18nService) { }


  public hamburguer(): void {
    document.querySelector("#hamb_menu")?.classList.toggle("show");
    document.querySelector('.hambBtn')?.classList.toggle('active');
  }

  protected logout(): void {
    this.authf.logout();
  }

  //Getter & Setters
  protected get isLogged(): boolean {
    return this.authf.isLogged;
  }
}

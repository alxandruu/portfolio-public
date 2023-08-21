import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/firebase-manager/authentication/authentication.service';
import { I18nService } from 'src/app/services/i18n/i18n.service';

@Component({
  selector: 'application-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  constructor(private authf: AuthenticationService, protected i18next: I18nService) { }

  ngOnInit(): void {

  }

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

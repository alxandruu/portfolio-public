import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/firebase-manager/authentication/authentication.service';
import { I18nService } from 'src/app/_services/i18n/i18n.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
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

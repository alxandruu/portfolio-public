import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { UxiaComponent } from './global/uxia/uxia.component';
import { AuthenticationService } from './_services/firebase-manager/authentication/authentication.service';
import { I18nService } from './_services/i18n/i18n.service';
import { WebsiteThemeService } from './_services/theme/website-theme.service';

declare let $: any; //jQuery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('uxiaContainer', { read: ViewContainerRef }) uxiaContainer!: ViewContainerRef;
  public year = new Date().getFullYear();

  constructor(private authf: AuthenticationService, private webTheme: WebsiteThemeService, protected i18s: I18nService) {
    this.webTheme.webpageTheme();
  }

  ngOnInit(): void {
    document.querySelector('.switcher.' + (this.webTheme.theme == "dark" ? "light" : "dark"))?.classList.add("active");
    document.querySelector('.switcher.mobile.' + (this.webTheme.theme == "dark" ? "light" : "dark"))?.classList.add("active");
  }

  public addUxia(title: string, message: string, type?: string) {
    let component = this.uxiaContainer.createComponent(UxiaComponent);
    component.setInput('title', title);
    component.setInput('message', message);
    if (type) {
      component.setInput('type', type);
    }
  }


  switchTheme(key: string) {
    document.querySelector('.switcher.active')?.classList.toggle('active');
    document.querySelector(".switcher." + key)?.classList.toggle("active");
    document.querySelector('.switcher.mobile.active')?.classList.toggle('active');
    document.querySelector(".switcher.mobile." + key)?.classList.toggle("active");
    let keyTheme = (key == "light") ? "dark" : "light";
    document.documentElement.setAttribute('data-theme', keyTheme);
    this.webTheme.theme = keyTheme;
    localStorage.setItem('theme', keyTheme);
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  //Getter & Setters
  protected get isLogged(): boolean {
    return this.authf.isLogged;
  }

}

$(window).scroll(function () {
  if ($(window).scrollTop() < 250 || $(window).scrollTop() >= $(document).height()) {
    $('.scrollTopButton').hide(250);
  }
  else {
    $('.scrollTopButton').show(250);
  }
});
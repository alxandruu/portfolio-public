import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationCardComponent } from './components/application/notification_card/notification-card.component';
import { AuthenticationService } from './services/firebase-manager/authentication/authentication.service';
import { I18nService } from './services/i18n/i18n.service';
import { WebsiteThemeService } from './services/theme/website-theme.service';


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
    let component = this.uxiaContainer.createComponent(NotificationCardComponent);
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

window.addEventListener('scroll', () => {
  if (window.scrollY < 250 || window.scrollY >= document.documentElement.scrollHeight) {
    document.querySelector('.scrollTopButton')?.classList.remove("active");
  }
  else {
    document.querySelector('.scrollTopButton')?.classList.add("active");
  }
})


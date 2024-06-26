import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from './core/services/firebase-manager/authentication/authentication.service';
import { I18nService } from './core/services/i18n/i18n.service';
import { WebsiteThemeService } from './core/services/theme/website-theme.service';
import { NotificationCardComponent } from './shared/components/notification-card/notification-card.component';


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
  }

  public addUxia(title: string, message: string, type?: string) {
    let component = this.uxiaContainer.createComponent(NotificationCardComponent);
    component.setInput('title', title);
    component.setInput('message', message);
    if (type) {
      component.setInput('type', type);
    }
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

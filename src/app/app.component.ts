import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { WebNavigationConfig } from './core/models/interfaces/web-navigation-config';
import { AuthenticationService } from './core/services/firebase-manager/authentication/authentication.service';
import { PortalService } from './core/services/portal/portal.service';
import { NotificationCardComponent } from './shared/components/notification-card/notification-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  @ViewChild('uxiaContainer', { read: ViewContainerRef }) uxiaContainer!: ViewContainerRef;
  wnc!: WebNavigationConfig;

  constructor(private authf: AuthenticationService, private portalService: PortalService) {
    this.portalService.getPages().subscribe(config => {
      this.wnc = config
    })
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



  //Getter & Setters
  protected get isLogged(): boolean {
    return this.authf.isLogged;
  }

}

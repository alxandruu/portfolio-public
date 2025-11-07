import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from './core/services/firebase-manager/authentication/authentication.service';
import { PortalService } from './core/services/portal/portal.service';
import { WNCRouterLink } from './core/types/web-navigation-config.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})

export class AppComponent {
  @ViewChild('uxiaContainer', { read: ViewContainerRef }) uxiaContainer!: ViewContainerRef;
  pages: Array<WNCRouterLink> = [];

  constructor(private authf: AuthenticationService, private portalService: PortalService) {
    this.portalService.getPages().subscribe(pages => {
      this.pages = pages
    })
  }

  ngOnInit(): void {
  }

  public addUxia(title: string, message: string, type?: string) {
    // let component = this.uxiaContainer.createComponent(NotificationCardComponent);
    // component.setInput('title', title);
    // component.setInput('message', message);
    // if (type) {
    //   component.setInput('type', type);
    // }
  }



  //Getter & Setters
  protected get isLogged(): boolean {
    return this.authf.isLogged;
  }

}

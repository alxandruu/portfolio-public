import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore, } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HamburgerMenuComponent } from './core/components/hamburger-menu/hamburger-menu.component';
import { HeaderComponent } from "./core/components/header/header.component";
import { IconBedComponent } from './core/components/icons/icon-bed/icon-bed.component';
import { LanguageSelectorComponent } from './core/components/language-selector/language-selector.component';
import { PortalLinkComponent } from './core/components/portal-link/portal-link.component';
import { ScrollTopButtonComponent } from './core/components/scroll-top-button/scroll-top-button.component';
import { ThemeButtonComponent } from './core/components/theme-button/theme-button.component';
import { FooterComponent } from "./core/components/footer/footer.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconBedComponent,
    HamburgerMenuComponent,
    LanguageSelectorComponent,
    HttpClientModule,
    ScrollTopButtonComponent,
    ThemeButtonComponent,
    PortalLinkComponent,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => {
        const auth = getAuth();
        return auth;
    }),
    HeaderComponent,
    FooterComponent
],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule { }

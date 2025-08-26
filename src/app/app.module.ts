import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore, } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { IconBedComponent } from './core/components/icons/icon-bed/icon-bed.component';
import { ScrollTopButtonComponent } from './core/components/scroll-top-button/scroll-top-button.component';
import { ThemeButtonComponent } from './core/components/theme-button/theme-button.component';
import { CoreModule } from './core/core.module';
import { SelectorLanguageComponent } from './shared/components/i18n/selector-language/selector-language.component';
import { NavigationPortalLinkComponent } from './shared/components/navigation/navigation-portal-link/navigation-portal-link.component';
import { HamburgerMenuComponent } from './core/components/hamburger-menu/hamburger-menu.component';


@NgModule({ declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        IconBedComponent,
        CoreModule,
        HamburgerMenuComponent,
        SelectorLanguageComponent,
        ScrollTopButtonComponent,
        ThemeButtonComponent,
        NavigationPortalLinkComponent,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => {
            const auth = getAuth();
            return auth;
        })], providers: [Title, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }

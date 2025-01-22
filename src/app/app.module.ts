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
import { CoreModule } from './core/core.module';
import { ButtonsModule } from './shared/components/buttons/buttons.module';
import { SelectorLanguageComponent } from './shared/components/i18n/selector-language/selector-language.component';
import { IconsModule } from './shared/components/icons/icons.module';
import { HamburgerNavigationComponent } from './shared/components/navigation/navigation-hamburger/navigation-hamburger.component';
import { PortalGeneralComponents } from './shared/components/portal-general.component';
import { NavigationPortalLinkComponent } from './shared/components/navigation/navigation-portal-link/navigation-portal-link.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    IconsModule,
    HamburgerNavigationComponent,
    SelectorLanguageComponent,
    HttpClientModule,
    ButtonsModule,
    NavigationPortalLinkComponent,
    PortalGeneralComponents,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => {
      const auth = getAuth();
      return auth;
    }),
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule { }

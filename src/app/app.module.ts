import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore, } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { PortalGeneralComponents } from './shared/components/portal-general.component';
import { ButtonScrollTopComponent } from './shared/components/buttons/button-scroll-top/button-scroll-top.component';
import { IconsModule } from './shared/components/icons/icons.module';
import { HamburgerNavigationComponent } from './shared/components/navigation/navigation-hamburger/navigation-hamburger.component';
import { ThemeSwitcherComponent } from './shared/components/theme/theme-switcher/theme-switcher.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    IconsModule,
    ThemeSwitcherComponent,
    HamburgerNavigationComponent,
    HttpClientModule,
    ButtonScrollTopComponent,
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

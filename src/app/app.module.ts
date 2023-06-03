import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore, } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { UxiaComponent } from './global/uxia/uxia.component';
import { PortfolioComponentsModule } from './_components/v1/portfolio-components.module';
import { PortfolioPagesModule } from './_pages/portfolio-pages.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UxiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortfolioComponentsModule,
    PortfolioPagesModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => {
      const auth = getAuth();
      return auth;
    }),
  ],
  providers: [Title],
  bootstrap: [AppComponent],
  entryComponents: [UxiaComponent],
})
export class AppModule { }

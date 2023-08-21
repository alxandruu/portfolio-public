import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore, } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { PagesModule } from './pages/pages.module';
import { ApplicationComponentsModule } from './components/application/application-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ApplicationComponentsModule,
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

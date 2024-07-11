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
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { NavigationMenuComponent } from './shared/components/navigation-menu/navigation-menu.component';
import { CanvasComponent } from './canvas/canvas.component';
import { PortalGeneralComponents } from './shared/components/portal-general.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TimelineHistoryComponent } from './shared/components/timeline-history/timeline-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    FooterComponent,
    TimelineHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    CoreModule,
    HttpClientModule,
    NavigationMenuComponent,
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

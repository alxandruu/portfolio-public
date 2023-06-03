import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { PrViewComponent } from './_pages/projects/pr-view/pr-view.component';
import { ProjectsComponent } from './_pages/projects/projects.component';
import { ResourcesComponent } from './_pages/resources/resources.component';
import { CVComponent } from './_pages/cv/cv.component';
import { LoginComponent } from './_pages/login/login.component';
import { LoginActivate } from './_services/authguard/login-activate/login-activate.guard';
import { AuthGuard } from './_services/authguard/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: PrViewComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginActivate] },

  {
    path: 'resources', component: ResourcesComponent
  }, {
    path: 'cv', component: CVComponent
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

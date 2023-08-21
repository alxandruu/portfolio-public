import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { ProjectViewComponent } from './pages/public/projects/project_view/project-view.component';
import { ProjectsComponent } from './pages/public/projects/projects.component';
import { ResourcesComponent } from './pages/public/resources/resources.component';
import { CVComponent } from './pages/public/cv/cv.component';
import { LoginComponent } from './pages/public/login/login.component';
import { LoginActivate } from './services/authguard/login-activate/login-activate.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectViewComponent },
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

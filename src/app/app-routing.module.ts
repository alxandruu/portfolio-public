import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/public/home/home.component';
import { ProjectViewComponent } from './pages/public/projects/project_view/project-view.component';
import { ProjectsComponent } from './pages/public/projects/projects.component';
import { ResourcesComponent } from './pages/public/resources/resources.component';
import { CVComponent } from './pages/public/cv/cv.component';
import { LoginComponent } from './pages/public/login/login.component';
import { LoginActivate } from './core/services/authguard/login-activate/login-activate.guard';
import { CanvasComponent } from './canvas/canvas.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' } },
  { path: 'canvas', component: CanvasComponent },
  { path: ':page/:id', component: ProjectViewComponent, data: { animation: 'ProjectViewPage' } },
  { path: 'login', component: LoginComponent, canActivate: [LoginActivate], data: { animation: 'LoginPage' } },
  { path: 'resources', component: ResourcesComponent, data: { animation: 'ResourcesPage' } },
  { path: 'cv', component: CVComponent, data: { animation: 'CvPage' } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

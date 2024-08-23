import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/public/home/home.component';
import { ProjectViewComponent } from './pages/public/projects/project_view/project-view.component';
import { ProjectsComponent } from './pages/public/projects/projects.component';
import { ResourcesComponent } from './pages/public/resources/resources.component';
import { LoginComponent } from './views/public/login/login.component';
import { LoginActivate } from './core/services/authguard/login-activate/login-activate.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' } },
  { path: ':page/:id', component: ProjectViewComponent, data: { animation: 'ProjectViewPage' } },
  { path: 'login', component: LoginComponent, canActivate: [LoginActivate], data: { animation: 'LoginPage' } },
  { path: 'resources', component: ResourcesComponent, data: { animation: 'ResourcesPage' } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

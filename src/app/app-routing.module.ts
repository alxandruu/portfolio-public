import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginActivate } from './core/services/authguard/login-activate/login-activate.guard';
import { LoginPage } from './views/pages/private/login/login.page';
import { HomePage } from './views/pages/public/home/home.page';
import { ProjectViewPage } from './views/pages/public/projects/project_view/project-view.page';
import { ProjectsPage } from './views/pages/public/projects/projects.page';
import { ResourcesPage } from './views/pages/public/resources/resources.page';


const routes: Routes = [
  { path: '', component: HomePage, data: { animation: 'HomePage' } },
  { path: 'projects', component: ProjectsPage, data: { animation: 'ProjectsPage' } },
  { path: 'projects/:id', component: ProjectViewPage, data: { animation: 'ProjectViewPage' } },
  { path: 'login', component: LoginPage, canActivate: [LoginActivate], data: { animation: 'LoginPage' } },
  { path: 'resources', component: ResourcesPage, data: { animation: 'ResourcesPage' } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

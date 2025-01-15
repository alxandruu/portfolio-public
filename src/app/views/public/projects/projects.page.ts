import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { ProjectsManagerService } from 'src/app/core/services/firebase-manager/projects/projects-manager.service';
import { StorageManagerService } from 'src/app/core/services/firebase-manager/storage/storage-manager.service';
import { Project } from 'src/app/core/models/interfaces/project';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { Router, RouterModule } from '@angular/router';


@Component({
  templateUrl: './projects.page.html',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterModule],
  styleUrls: ['./projects.page.scss']
})
export class ProjectsPage {
  projects: Observable<Project[]>;

  constructor(private router: Router, private pm: ProjectsManagerService, protected i18s: I18nService, protected sm: StorageManagerService,) {
    this.projects = this.pm.getProjects().pipe(
      map(data => {
        data.forEach(async p => {
          p.img = await this.sm.retrieveURLImageFromStorage(`projects/${p.id}/${p.img}`);
          p.url = this.router.createUrlTree(['/projects', p.id]).toString();
        })
        return data;
      })
    );
  }

}

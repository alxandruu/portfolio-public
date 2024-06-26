import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { ProjectsManagerService } from 'src/app/core/services/firebase-manager/projects/projects-manager.service';
import { StorageManagerService } from 'src/app/core/services/firebase-manager/storage/storage-manager.service';
import { Project } from 'src/app/core/models/interfaces/project';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Observable<Project[]>;

  constructor(private pm: ProjectsManagerService, protected i18s: I18nService, protected sm: StorageManagerService) {
    this.projects = this.pm.getProjects().pipe(
      map(data => {
        data.forEach(async p => {
          p.img = await this.sm.retrieveURLImageFromStorage(`projects/${p.id}/${p.img}`);
        })
        return data;
      })
    );
  }
}

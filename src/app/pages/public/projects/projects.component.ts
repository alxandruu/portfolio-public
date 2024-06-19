import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { ProjectsManagerService } from 'src/app/services/firebase-manager/projects/projects-manager.service';
import { Project } from 'src/app/models/interfaces/project';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Observable<Project[]>;

  constructor(private pm: ProjectsManagerService, protected i18s: I18nService) {
    this.projects = this.pm.getProjects();
  }

  ngOnInit(): void {
  }
}

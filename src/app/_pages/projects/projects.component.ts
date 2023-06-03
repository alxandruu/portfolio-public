import { Component, OnInit } from '@angular/core';
import { Project } from '../../_models/project';
import { Observable } from 'rxjs';
import { I18nService } from 'src/app/_services/i18n/i18n.service';
import { ProjectsManagerService } from 'src/app/_services/firebase-manager/projects/projects-manager.service';

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

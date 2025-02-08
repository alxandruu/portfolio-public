import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Project } from 'src/app/core/types/project.interface';
import { ProjectsManagerService } from 'src/app/core/services/firebase-manager/projects/projects-manager.service';
import { StorageManagerService } from 'src/app/core/services/firebase-manager/storage/storage-manager.service';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';


@Component({
  selector: 'project-view',
  templateUrl: './project-view.page.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./project-view.page.scss']
})
export class ProjectViewPage implements OnInit {
  project!: Project;

  constructor(private ar: ActivatedRoute, private sm: StorageManagerService, private pm: ProjectsManagerService,
    protected i18s: I18nService) {

    this.ar.params.subscribe(params => {
      this.pm.getProject(params['id']).then(result => {
        this.sm.retrieveURLImageFromStorage(`projects/${result.id}/${result.img}`).then((url) => {
          result.img = url;
        });
        result.imgs.forEach((img: string, index: number, array: string[]) => {
          this.sm.retrieveURLImageFromStorage(`projects/${result.id}/${img}`).then((url) => {
            array[index] = url;
          });
        });

        this.project = result;
      });

    });
  }

  ngOnInit(): void {

  }

}

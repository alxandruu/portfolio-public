import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectsManagerService } from 'src/app/_services/firebase-manager/projects/projects-manager.service';
import { StorageManagerService } from 'src/app/_services/firebase-manager/storage/storage-manager.service';
import { I18nService } from 'src/app/_services/i18n/i18n.service';


@Component({
  selector: 'app-pr-view',
  templateUrl: './pr-view.component.html',
  styleUrls: ['./pr-view.component.scss']
})
export class PrViewComponent implements OnInit {
  project!: Project;

  constructor(private ar: ActivatedRoute, private sm: StorageManagerService, private pm: ProjectsManagerService,
    protected i18s: I18nService) {

    this.ar.params.subscribe(params => {
      this.pm.getProject(params['id']).then(result => {
        this.sm.retrieveURLImageFromStorage(`projects/${result.id}/${result.img}`).then((url) => {
          result.img = url as string;
        });
        result.imgs.forEach((img, index, array) => {
          this.sm.retrieveURLImageFromStorage(`projects/${result.id}/${img}`).then((url) => {
            array[index] = url as string;
          });
        });

        this.project = result;
      });

    });
  }

  ngOnInit(): void {

  }

}

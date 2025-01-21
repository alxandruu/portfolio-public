import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Project } from 'src/app/core/models/interfaces/project';
import { ProjectsManagerService } from 'src/app/core/services/firebase-manager/projects/projects-manager.service';
import { StorageManagerService } from 'src/app/core/services/firebase-manager/storage/storage-manager.service';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { PortalService } from 'src/app/core/services/portal/portal.service';
import { CardViewerStyleSelectorComponent } from 'src/app/shared/components/cards/card-viewer-style-selector.component';
import { CardViewerComponent } from 'src/app/shared/components/cards/card-viewer.component';
import { CardComponent } from 'src/app/shared/components/cards/card/card.component';
import { ListCardComponent } from 'src/app/shared/components/cards/list-card/list-card.component';


@Component({
  templateUrl: './projects.page.html',
  standalone: true,
  imports: [CommonModule, RouterModule, CardViewerStyleSelectorComponent, CardComponent, ListCardComponent],
  styleUrls: ['./projects.page.scss']
})
export class ProjectsPage {
  projects: Observable<Project[]>;
  constantsPortalService = PortalService;
  cardViewerStyle: string = "";


  constructor(private portalService: PortalService, private pm: ProjectsManagerService, protected i18s: I18nService, protected sm: StorageManagerService,) {
    this.projects = this.pm.getProjects().pipe(
      map(data => {
        data.forEach(async p => {
          p.img = await this.sm.retrieveURLImageFromStorage(`projects/${p.id}/${p.img}`);
        })
        return data;
      })
    );

    this.portalService.getCardViewerStyle().subscribe(value => {
      this.cardViewerStyle = value;
    })
  }

}

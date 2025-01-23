import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { Category } from 'src/app/core/models/interfaces/category';
import { Resource } from 'src/app/core/models/interfaces/resource';
import { CategoryPipe } from 'src/app/core/pipes/category.pipe';
import { ResourcesManagerService } from 'src/app/core/services/firebase-manager/resources/resources-manager.service';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { PortalService } from 'src/app/core/services/portal/portal.service';
import { CardsModule } from 'src/app/shared/components/cards/cards.module';
import { IconsModule } from 'src/app/shared/components/icons/icons.module';
import { sortHighlighted } from 'src/app/shared/static/static-methods';


@Component({
  templateUrl: './resources.page.html',
  standalone: true,
  imports: [CommonModule, CoreModule, RouterModule, CardsModule, IconsModule],
})

export class ResourcesPage {
  constantsPortalService = PortalService;
  showFilterCategory: boolean = false;
  cardViewerStyle: string = "";
  protected categoryActive!: Category
  protected resources: Resource[] = [];
  protected categories: Category[] = [];
  private randomizedResource!: Resource;

  constructor(private portalSrv: PortalService, private rms: ResourcesManagerService, protected i18s: I18nService, private ps: PortalService) {
    this.portalSrv.getCardViewerStyle().subscribe(value => {
      this.cardViewerStyle = value;
    })

    this.rms.getResources().subscribe(data => {
      this.resources = data.sort(sortHighlighted);
    });



    this.rms.getResourcesCategories().subscribe(data => {
      this.categoryActive = data[0]
      this.categories = data;
    });

  }

  randomResource() {
    const filteredResources = new CategoryPipe().transform(this.resources, this.categoryActive.id);
    let random: Resource;
    do {
      random = filteredResources[Math.floor(Math.random() * filteredResources.length)];
    } while (this.randomizedResource && this.randomizedResource.id == random.id);
    this.randomizedResource = random;
    window.open(random.url, "_blank");
  }
}

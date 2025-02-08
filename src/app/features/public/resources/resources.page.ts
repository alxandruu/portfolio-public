import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconAngleComponent } from 'src/app/core/components/icons/icon-angle/icon-angle.component';
import { IconDiceComponent } from 'src/app/core/components/icons/icon-dice/icon-dice.component';
import { CoreModule } from 'src/app/core/core.module';
import { CardViewerStyle } from 'src/app/core/enums/card-viewer-style.enum';
import { CategoryPipe } from 'src/app/core/pipes/category.pipe';
import { ResourcesManagerService } from 'src/app/core/services/firebase-manager/resources/resources-manager.service';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { PortalService } from 'src/app/core/services/portal/portal.service';
import { Category } from 'src/app/core/types/category.interface';
import { Resource } from 'src/app/core/types/resource.interface';
import { CardsModule } from 'src/app/shared/components/cards/cards.module';


@Component({
  templateUrl: './resources.page.html',
  standalone: true,
  imports: [CommonModule, CoreModule, RouterModule, CardsModule, IconDiceComponent, IconAngleComponent],
})

export class ResourcesPage {
  CardViewerStyle = CardViewerStyle;
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
      this.resources = data.sort((obj1: Resource, obj2: Resource): number => {
        if (obj1.highlighted && !obj2.highlighted)
          return -1;
        else if (!obj1.highlighted && obj2.highlighted)
          return 1;
        else
          return 0;
      });
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

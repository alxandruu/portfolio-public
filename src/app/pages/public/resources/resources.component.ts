import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/firebase-manager/authentication/authentication.service';
import { ResourcesManagerService } from 'src/app/core/services/firebase-manager/resources/resources-manager.service';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { CategoryPipe } from 'src/app/core/pipes/category.pipe';
import { Resource } from 'src/app/core/models/interfaces/resource';
import { Category } from 'src/app/core/models/interfaces/category';
import { RESOURCES_DEFAULT_CATEGORY, RESOURCES_VIEWER_COOKIE } from 'src/app/core/models/utils/constants';
declare let $: any; //jQuery

@Component({
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})

export class ResourcesComponent {
  protected resources: Resource[] = [];
  protected categories: Category[] = [];
  protected categoriesFilter: Category[] = [];
  protected categoryActive: Category = RESOURCES_DEFAULT_CATEGORY
  protected viewerSelected: string;
  private randomizedResource!: Resource;

  constructor(private authf: AuthenticationService, private rms: ResourcesManagerService, protected i18s: I18nService) {
    this.rms.getResources().subscribe(data => {
      this.resources = data.sort((val1, val2) => {
        if (val1.highlighted && !val2.highlighted)
          return -1;
        else if (!val1.highlighted && val2.highlighted)
          return 1;
        else
          return 0;
      });
    });

    this.rms.getResourcesCategories().subscribe(data => {
      let dFiltered = data.filter((c) => {
        if (c.id != RESOURCES_DEFAULT_CATEGORY.id) {
          let rFiltered = this.resources.filter((r) => {
            return (r.category == c.id) ? true : false;
          });
          if (rFiltered.length == 0) {
            return false;
          }
        }
        return true;
      });

      this.categories = data;
      this.categoriesFilter = dFiltered;
      this.categoryActive = data[0] as Category;
    });

    this.viewerSelected = this.initViewer();

  }

  protected changeViewer(type: string): void {
    localStorage.setItem(RESOURCES_VIEWER_COOKIE, type);
    this.viewerSelected = type;
  }

  protected filterByCategory(id: string): void {
    this.categories.forEach(c => {
      if (c.id == id) {
        this.categoryActive = c;
      }
    });
  }

  protected randomResource() {
    const filteredResources = new CategoryPipe().transform(this.resources, this.categoryActive.id);
    let random: Resource;
    do {
      random = filteredResources[Math.floor(Math.random() * filteredResources.length)];
    } while (this.randomizedResource && this.randomizedResource.id == random.id);
    this.randomizedResource = random;
    window.open(random.url, "_blank");
  }


  protected showResources(): void {
    document.querySelector(".category-filter")?.classList.toggle("show");
    document.querySelector('.category-filter-mobile')?.classList.toggle('active');
  }


  // INIT METHODS
  private initViewer(): string {
    let viewerSelectedLocalStorage = localStorage.getItem(RESOURCES_VIEWER_COOKIE);
    if (viewerSelectedLocalStorage == null) {
      localStorage.setItem(RESOURCES_VIEWER_COOKIE, "card");
      return "card";
    } else {
      return viewerSelectedLocalStorage as string;
    }
  }

  // Getter & Setters
  protected get isLogged(): boolean {
    return this.authf.isLogged;
  }

}

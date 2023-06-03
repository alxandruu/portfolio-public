import { Component, OnInit } from '@angular/core';
import { ApplicationConstants } from 'src/app/_constants/ApplicationConstants';
import { Category } from 'src/app/_models/category';
import { Resource } from 'src/app/_models/resource';
import { AuthenticationService } from 'src/app/_services/firebase-manager/authentication/authentication.service';
import { ResourcesManagerService } from 'src/app/_services/firebase-manager/resources/resources-manager.service';
import { I18nService } from 'src/app/_services/i18n/i18n.service';
import { ResourceFilterPipe } from './pipes/resourceFilter.pipe';


@Component({
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})

export class ResourcesComponent implements OnInit {
  protected resources: Resource[] = [];
  protected categories: Category[] = [];
  protected categoriesFilter: Category[] = [];
  protected categoryActive: Category = ApplicationConstants.resourcesConstants.default_category
  protected viewerSelected: string;
  private randomizedResource!: Resource;

  constructor(private authf: AuthenticationService, private rm: ResourcesManagerService, protected i18s: I18nService) {
    this.rm.getResources().subscribe(data => {
      this.resources = data;
    });

    this.rm.getResourcesCategories().subscribe(data => {
      let dFiltered = data.filter((c) => {
        if (c.id != ApplicationConstants.resourcesConstants.default_category.id) {
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

  ngOnInit(): void {
  }

  protected changeViewer(type: string): void {
    localStorage.setItem(ApplicationConstants.resourcesConstants.viewerCookie, type);
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
    const filteredResources = new ResourceFilterPipe().transform(this.resources, this.categoryActive.id);
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
    let viewerSelectedLocalStorage = localStorage.getItem(ApplicationConstants.resourcesConstants.viewerCookie);
    if (viewerSelectedLocalStorage == null) {
      localStorage.setItem(ApplicationConstants.resourcesConstants.viewerCookie, "card");
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

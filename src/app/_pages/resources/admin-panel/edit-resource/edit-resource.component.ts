import { Component, Input } from '@angular/core';
import { map, Observable, } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Category } from 'src/app/_models/category';
import { Resource } from 'src/app/_models/resource';
import { ResourcesManagerService } from 'src/app/_services/firebase-manager/resources/resources-manager.service';
import { I18nService } from 'src/app/_services/i18n/i18n.service';
@Component({
  selector: 'admin-edit-resource',
  templateUrl: './edit-resource.component.html',
  styleUrls: ['./edit-resource.component.scss']
})
export class EditResourceComponent {
  @Input() categories: Category[] = [];
  protected id_modal: string = "erm-321";
  protected lang: string;
  private defaultResources: Observable<Resource[]>
  protected resources: Observable<Resource[]>;
  protected selectedResource!: Resource | null;
  protected confirmDelete: boolean = false;
  protected searchValue: string = "";
  public modal_status: boolean = false;

  constructor(protected i18s: I18nService, private rm: ResourcesManagerService,
    private ac: AppComponent) {
    this.lang = i18s.lang;
    this.resources = rm.getResources(this.lang);
    this.defaultResources = this.resources;
  }


  deleteResource(form: any, lang?: string) {
    if (this.confirmDelete && lang) {
      this.rm.deleteResource(form.value, lang).then(
        (status) => {
          if (status.message) {
            this.ac.addUxia(status.message.title, status.message.body, status.message.type);
          }
        }
      ).catch(() => {
        let title = this.i18s.getValue("resources.edit-resource.delete.error.title");
        let message = this.i18s.getValue("resources.edit-resource.delete.error.title");
        this.ac.addUxia(title, message, "error");
      });

      this.selectedResource = null;
      this.confirmDelete = false;
    } else {
      this.confirmDelete = true;
    }
  }

  deleteAllResource(form: any) {
    if (this.confirmDelete) {
      this.rm.deleteAllLanguagesResources(form.value).then(
        (status) => {
          if (status.message) {
            this.ac.addUxia(status.message.title, status.message.body, status.message.type);
          }
        }
      );

      this.selectedResource = null;
      this.confirmDelete = false;
    }
  }

  editResource(form: any) {
    form.value.highlighted = this.selectedResource?.highlighted;
    this.rm.addResource(form.value, this.i18s.lang, 1).then(value => {
      if (value.message) {
        this.ac.addUxia(value.message.title, value.message.body, value.message.type);
      }
    })

  }

  toggleSC(): void {
    $(".selector-container-toggle").toggleClass("active");
    $(".selector-container").toggleClass("active");
  }
  searchFilter(value: string) {
    this.resources = this.defaultResources.pipe(
      map(resources => {
        const x = resources.filter(r => {
          let nombre = r.name;
          return nombre.toLowerCase().includes(value.toLowerCase());
        });
        return x;
      })
    )
  }
  markAsHighlighted(resource: Resource) {
    this.rm.highlightResource(resource, this.i18s.lang);
  }
}

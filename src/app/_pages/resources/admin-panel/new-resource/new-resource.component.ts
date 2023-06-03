import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Category } from 'src/app/_models/category';
import { ResourcesManagerService } from 'src/app/_services/firebase-manager/resources/resources-manager.service';
import { I18nService } from 'src/app/_services/i18n/i18n.service';

@Component({
  selector: 'admin-new-resource',
  templateUrl: './new-resource.component.html',
  styleUrls: ['./new-resource.component.scss']
})
export class NewResourceComponent {
  @Input() categories: Category[] = [];
  lang: string;
  protected addError: string = "";
  public modal_status: boolean = false;


  constructor(protected i18s: I18nService, private rm: ResourcesManagerService,
    private ac: AppComponent) {
    this.lang = i18s.lang;
  }

  changeLang(language: string): void {
    this.lang = language;
  }

  addResource(form: any, e: Event): void {
    if (this.validateForm(form.value)) {
      this.rm.addResource(form.value, this.lang).then(value => {
        if (value.status) {
          form.reset();
        }
        if (value.message) {
          this.ac.addUxia(value.message.title, value.message.body, value.message.type);
        }
      })

    } else {
      this.addError = this.i18s.getValue("resources.add-resource.error.required-all");
    }
  }

  validateForm(formData: any): boolean {
    if (!formData.name) {
      return false;
    }
    if (!formData.description) {
      return false;
    }
    if (!formData.category) {
      return false;
    }
    if (!formData.img) {
      return false;
    }
    if (!formData.url) {
      return false;
    }

    return true;
  }

}

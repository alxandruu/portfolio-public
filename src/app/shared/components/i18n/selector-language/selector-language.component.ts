import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';

@Component({
    selector: 'selector-language',
    imports: [CommonModule],
    template: `
    <div class="unselectable d-flex flex-wrap justify-content-center">
        <div *ngFor="let lng of i18s.languages"
            class="me-4 hover-animation-underline cursor-pointer"
            (click)="i18s.changeLanguage(lng.id)">{{lng.description}}</div>
    </div>
  `,
    encapsulation: ViewEncapsulation.None
})
export class SelectorLanguageComponent {
  constructor(protected i18s: I18nService) {

  }
}

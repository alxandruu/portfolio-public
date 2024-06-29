import { Component } from '@angular/core';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';

@Component({
  selector: 'component-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(protected i18s: I18nService) {

  }

  actualYear(): number {
    return new Date().getFullYear();
  }
}

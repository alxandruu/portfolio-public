import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';

@Component({
  selector: 'language-selector',
  imports: [CommonModule],
  templateUrl: 'language-selector.component.html',
  standalone: true
})
export class LanguageSelectorComponent {
  readonly i18s = inject(I18nService)
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CommonModule, LanguageSelectorComponent]
})
export class FooterComponent {

}

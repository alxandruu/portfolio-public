import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Theme } from 'src/app/core/enums/theme-scheme.enum';
import { ThemeManagerService } from '../../services/theme-manager/theme-manager.service';

@Component({
  selector: 'theme-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'theme-button.component.html',
})
export class ThemeButtonComponent {
  Theme = Theme
  readonly themeManagerService = inject(ThemeManagerService)
}

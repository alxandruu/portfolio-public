import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Card } from 'src/app/core/enums/card-scheme.enum';
import { ThemeManagerService } from 'src/app/core/services/theme-manager/theme-manager.service';

@Component({
    selector: 'card-theme-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card-theme-button.component.html',
})
export class CardThemeButtonComponent {
    readonly CardViewerStyle = Card;
    readonly themeManager = inject(ThemeManagerService)
}

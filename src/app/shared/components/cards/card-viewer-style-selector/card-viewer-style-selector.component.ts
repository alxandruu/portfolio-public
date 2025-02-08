import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardViewerStyle } from 'src/app/core/enums/card-viewer-style.enum';
import { Link } from 'src/app/core/types/link.interface';
import { PortalService } from 'src/app/core/services/portal/portal.service';

/**
 * Component used to show information in the portal in a card format. 
 * With an image, title, and description. It also accepts links
 * 
 */
@Component({
    selector: 'component-card-style-selector',
    standalone: true,
    imports: [CommonModule],
    template: `
      <div class="d-flex align-items-center font-size-125">
        <div class="cursor-pointer  me-3 hover-color-secondary text-theme-dark" (click)="changeCardViewerStyle(CardViewerStyle.LIST)">
            <i class="fas fa-list"></i>
        </div>
        <div class="cursor-pointer hover-color-secondary text-theme-dark" (click)="changeCardViewerStyle(CardViewerStyle.CARD)">
            <i class="fas fa-square"></i>
        </div>
    </div>
    `,
    styles: ['']
})
export class CardViewerStyleSelectorComponent {
    CardViewerStyle = CardViewerStyle;
    cardViewerStyle!: string;

    constructor(private portalSrv: PortalService) {
        this.portalSrv.getCardViewerStyle().subscribe(value => {
            this.cardViewerStyle = value;
        })
    }

    changeCardViewerStyle(value: string) {
        this.portalSrv.modifyCardViewerStyle(value);
    }
}

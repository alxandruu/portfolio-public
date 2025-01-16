import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal/portal.service';
import { CardComponent } from './card/card.component';
import { ListCardComponent } from './list-card/list-card.component';

export interface CardViewerProperties {
    image: string;
    heading: string;
    description: string;
}

@Component({
    selector: 'component-card-viewer',
    standalone: true,
    imports: [CommonModule, CardComponent, ListCardComponent],
    template: `
    <component-list-card *ngIf="cardViewerStyle == constantsPortalService.CARD_VIEWER_STYLE_LIST"
            [description]="cardProps.description" [heading]="cardProps.heading" [image]="cardProps.image"></component-list-card>

    <component-card *ngIf="cardViewerStyle == constantsPortalService.CARD_VIEWER_STYLE_CARD" [image]="cardProps.image" 
        [heading]="cardProps.heading" [description]="cardProps.description"></component-card>
    `,
    styles: ['']
})
export class CardViewerComponent {
    constantsPortalService = PortalService
    cardViewerStyle: string = "";

    @Input() cardProps: CardViewerProperties = {
        image: '',
        heading: '',
        description: '',
    };

    constructor(private portalService: PortalService) {
        this.portalService.getCardViewerStyle().subscribe(value => {
            this.cardViewerStyle = value;
        })
    }
}

import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { fadeInOutAnimation } from 'src/app/core/animations/fade-in-out.animation';
import { PageHrefType } from 'src/app/core/enums/page-href-type.enum';
import { Page } from '../../types/page.interface';


@Component({
    selector: 'portal-link',
    templateUrl: 'portal-link.component.html',
    standalone: true,
    imports: [CommonModule, BrowserAnimationsModule, RouterModule],
    animations: [fadeInOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class PortalLinkComponent {
    PageHrefType = PageHrefType
    @Input() page!: Page

}

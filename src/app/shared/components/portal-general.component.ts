import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { LoadingIconComponent } from "./loading-icon/loading-icon.component";

@Component({
    selector: 'portal-general-components',
    standalone: true,
    imports: [CommonModule, LoadingIconComponent],
    template: `
        <component-loading-icon></component-loading-icon>
    `
})
export class PortalGeneralComponents {

} 

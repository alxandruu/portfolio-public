import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ThemeLoadingIconComponent } from "./theme/theme-loading-icon/theme-loading-icon.component";

@Component({
    selector: 'portal-general-components',
    standalone: true,
    imports: [CommonModule, ThemeLoadingIconComponent],
    template: `
        <component-loading-icon></component-loading-icon>
    `
})
export class PortalGeneralComponents {

} 

import { NgModule } from "@angular/core";
import { ButtonScrollTopComponent } from "./button-scroll-top/button-scroll-top.component";
import { ButtonThemeSchemeComponent } from "./button-theme-scheme/button-theme-scheme.component";

@NgModule({
    imports: [
        ButtonScrollTopComponent,
        ButtonThemeSchemeComponent
    ],
    exports: [
        ButtonScrollTopComponent,
        ButtonThemeSchemeComponent
    ],
    declarations: [

    ],
})
export class ButtonsModule { }
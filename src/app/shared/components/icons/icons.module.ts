import { NgModule } from "@angular/core";
import { IconAngleComponent } from "./icon-angle/icon-angle.component";
import { IconBedComponent } from "./icon-bed/icon-bed.component";
import { IconCloseButtonComponent } from "./icon-close-button/icon-close-button.component";
import { IconDiceComponent } from "./icon-dice/icon-dice.component";
import { IconLinkedinComponent } from './icon-linkedin/icon-linkedin.component';
import { IconMailComponent } from './icon-mail/icon-mail.component';
import { IconSignInComponent } from "./icon-sign-in/icon-sign-in.component";

@NgModule({
    imports: [
        IconBedComponent,
        IconMailComponent,
        IconLinkedinComponent,
        IconSignInComponent,
        IconDiceComponent,
        IconAngleComponent,
        IconCloseButtonComponent
    ],
    exports: [
        IconBedComponent,
        IconMailComponent,
        IconLinkedinComponent,
        IconSignInComponent,
        IconDiceComponent,
        IconAngleComponent,
        IconCloseButtonComponent
    ],
    declarations: [


    ],
})
export class IconsModule { }
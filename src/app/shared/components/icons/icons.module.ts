import { NgModule } from "@angular/core";
import { IconBedComponent } from "./icon-bed/icon-bed.component";
import { IconMailComponent } from './icon-mail/icon-mail.component';
import { IconLinkedinComponent } from './icon-linkedin/icon-linkedin.component';
import { IconSignInComponent } from "./icon-sign-in/icon-sign-in.component";

@NgModule({
    imports: [
        IconBedComponent,
        IconMailComponent,
        IconLinkedinComponent,
        IconSignInComponent
    ],
    exports: [
        IconBedComponent,
        IconMailComponent,
        IconLinkedinComponent,
        IconSignInComponent
    ],
    declarations: [

    ],
})
export class IconsModule { }
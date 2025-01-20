import { NgModule } from "@angular/core";
import { IconBedComponent } from "./icon-bed/icon-bed.component";
import { IconMailComponent } from './icon-mail/icon-mail.component';
import { IconLinkedinComponent } from './icon-linkedin/icon-linkedin.component';

@NgModule({
    imports: [
        IconBedComponent,
        IconMailComponent,
        IconLinkedinComponent
    ],
    exports: [
        IconBedComponent,
        IconMailComponent,
        IconLinkedinComponent
    ],
    declarations: [

    ],
})
export class IconsModule { }
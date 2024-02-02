import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavigationBarComponent } from "./navigation_bar/navigation-bar.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { NotificationCardComponent } from "./notification_card/notification-card.component";

@NgModule({
    declarations: [
        NavigationBarComponent,
        NotificationCardComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        NavigationBarComponent,
        NotificationCardComponent
    ]
})
export class ApplicationComponentsModule { }
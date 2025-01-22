import { NgModule } from "@angular/core";
import { CardViewerStyleSelectorComponent } from "./card-viewer-style-selector/card-viewer-style-selector.component";
import { CardComponent } from "./card/card.component";
import { ListCardComponent } from "./list-card/list-card.component";

@NgModule({
    imports: [
        CardViewerStyleSelectorComponent,
        CardComponent,
        ListCardComponent
    ],
    exports: [
        CardViewerStyleSelectorComponent,
        CardComponent,
        ListCardComponent
    ],
    declarations: [

    ],
})
export class CardsModule { }
import { PageHrefType } from "../enums/page-href-type.enum";

export interface Page {
    innerHTML: string;
    href: {
        url: string | any[];
        type: PageHrefType;
    };
    target?: string;
    rel?: string;
    navEffects?: boolean;
    ngRouter: boolean;
    childPages?: Array<Page>;
}

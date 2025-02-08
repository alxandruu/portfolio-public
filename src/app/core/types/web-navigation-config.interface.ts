export interface WNCRouterLink {
    innerHTML: string;
    href: {
        url: string | any[];
        type: WNCHrefType;
    };
    target?: string;
    rel?: string;
    navEffects?: boolean;
    ngRouter: boolean;
    childPages?: Array<WNCRouterLink>;
}

export enum WNCHrefType {
    DEFAULT, ROUTER_LINK
}
export interface WebNavigationConfig {
    pages: Array<WNCRouterLink>
}

export interface WNCRouterLink {
    innerHTML: string;
    href: string;
    target?: string;
    rel?: string;
    navEffects?: boolean;
    ngRouter: boolean;
    childPages?: Array<WNCRouterLink>;
}
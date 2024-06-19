import { Category } from "./category";

export interface Resource {
    id: string;
    name: string;
    img: string;
    description: string;
    url: string;
    category: string;
    highlighted: boolean;
}

export interface ResourcesConstants {
    viewerCookie: string;
    default_category: Category;
}



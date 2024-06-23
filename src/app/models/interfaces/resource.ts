import { ArrayCategoryPipeInterface } from "src/app/core/pipes/category.pipe";
import { Category } from "./category";

export interface Resource extends ArrayCategoryPipeInterface {
    id: string;
    name: string;
    img: string;
    description: string;
    url: string;
    highlighted: boolean;
}

export interface ResourcesConstants {
    viewerCookie: string;
    default_category: Category;
}



import { ArrayCategoryPipeInterface } from "src/app/core/pipes/category.pipe";

export interface Project extends ArrayCategoryPipeInterface {
    id: string;
    type: string;
    name: string;
    img: string;
    description: string;
    website: string;
    platform: string[];
    stack: string[];
    imgs: string[];
    in_development: boolean;
}

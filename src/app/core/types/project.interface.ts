import { ArrayCategoryPipeInterface } from "src/app/core/pipes/category.pipe";

export interface Project extends ArrayCategoryPipeInterface {
    id: string;
    type: string;
    name: string;
    img: string;
    description: string;
    website: string;
    stack: string[];
    imgs: string[];
}

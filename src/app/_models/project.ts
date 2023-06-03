export interface ProjectGroup {
    lang: String;
    data: Array<Project>;
}

export interface Project {
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
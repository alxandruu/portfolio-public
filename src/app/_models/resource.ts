export interface ResourceGroup {
    lang: String;
    data: Array<Resource>;
}

export interface Resource {
    id: string;
    name: string;
    img: string;
    description: string;
    url: string;
    category: string;
    highlighted: boolean;
}

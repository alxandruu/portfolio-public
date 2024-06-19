export interface Language {
    id: string;
    ref: any;
}

export interface LanguageResource<T> {
    lang: String;
    data: Array<T>;
}

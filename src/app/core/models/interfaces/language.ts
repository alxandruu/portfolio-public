export interface Language {
    id: string;
    description: string;
    ref: any;
}

export interface LanguageResource<T> {
    lang: String;
    data: Array<T>;
}

export interface MultilanguageField<T> {
    code: string;
    value: T;
}
import { Timestamp } from "firebase/firestore";

export interface ResourcesConstants {
    viewerCookie: string;
    default_category: Category;
}

export interface RegisterConstants {
    types: {
        success: string;
        warning: string;
        danger: string;
    },
    actions: {
        create: string;
        modify: string;
        delete: string;
        login: string;
    }
}

export interface ActionStatus {
    status: boolean;
    message?: Message;
}
export interface Message {
    title: string;
    body: string;
    type: string;
}

export interface CategoryGroup {
    lang: String;
    data: Array<Category>;
}

export interface Category {
    id: string;
    name: string;
}

export interface CV {
    lang: string;
    image: string;
    name: string;
    person_description: string;
    birth_date: string;
    nationality: string;
    email: string;
    website: string;
    address: string;
    work_experience: Array<WorkRow>;
    education_training: Array<EducationRow>;
    skills: Array<string>;
}

export interface WorkRow {
    date_start: string;
    date_end: string;
    job_position: string;
    company: string;
    location: string;
    achievements: Array<string>;
}
export interface EducationRow {
    date_start: string;
    date_end: string;
    degree: string;
    college: string;
    location: string;
}


export interface History {
    type: number;
    timestamp: Timestamp;
    action: number;
    user: string;
    referenceBefore: Object | null;
    referenceAfter: Object | null;
}

export interface Register {
    type: number;
    action: number;
    referenceBefore: Object | null;
    referenceAfter: Object | null;
}


export interface RegisterRow {
    timestamp: Timestamp;
    user: string | null;
    type: string;
    action: string;
    referenceBefore: Object | null;
    referenceAfter: Object | null;
}

export interface Language {
    id: string;
    ref: any;
}

export interface Profile {
    name: string;
    img: string;
    ocupation: string;
    about_me: Array<string>;
    social_media: SocialMedia;
}


export interface SocialMedia {
    header: string;
    sections: Array<SocialMediaSection>;
}

export interface SocialMediaSection {
    icon: string;
    text: string;
    url: string;
}

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

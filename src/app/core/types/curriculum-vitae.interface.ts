import { Time } from "@angular/common";
import { Timestamp } from "firebase/firestore";

export interface CurriculumVitae {
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
    languages: Array<string>;
}

export interface CurriculumVitaeV2 {
    work_experience: Array<WorkRowV2>;
}

export interface WorkRow {
    date_start: Timestamp;
    date_end: Timestamp;
    job_position: string;
    company: string;
    location: string;
    description: string;
}

export interface WorkRowV2 {
    date: {
        start: Timestamp,
        end: Timestamp
    };
    position: string;
    company: string;
    location: string;
    description: string;
}

export interface EducationRow {
    date_start: string;
    date_end: string;
    degree: string;
    college: string;
    location: string;
    certify_link: string;
}


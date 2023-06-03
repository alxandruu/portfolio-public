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
interface EducationRow {
    date_start: string;
    date_end: string;
    degree: string;
    college: string;
    location: string;
}
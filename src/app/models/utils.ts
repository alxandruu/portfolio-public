import { Timestamp } from "firebase/firestore";
import moment from "moment";
import { CV, CvConfiguration } from './interfaces';
import { environment } from "src/environments/environment";

export function propertyDefault(availables: Array<Object>, input: Object, df: Object): Object {
    return availables.find(el => el === input) ? input : df;
}

export function sortByDate(arr: Array<any>, key: string | number, date_format: string): Array<any> {
    arr.sort((a, b) => {
        let x = moment(a[key], date_format).valueOf();
        let y = moment(b[key], date_format).valueOf();
        if (x < y) {
            return 1;
        } else {
            return -1;
        }
    });
    return arr.sort()
}


export function showLoading(): void {
    document.querySelector('.loading-icon')?.classList.add('active')
    document.body.style.overflow = "hidden"
}
export function hideLoading(): void {
    document.querySelector('.loading-icon')?.classList.remove('active')
    document.body.style.overflow = "inherit"
}

export function currentDate(format: string): string {
    return moment().format(format)
}
export function timestampToString(stamp: Timestamp): string {
    const date = moment(stamp.toDate())
    return date.format("DD/MM/YYYY h:mm:ss")
}
export function textColor(): string {
    return getComputedStyle(document.documentElement).getPropertyValue('--dark-color')
}
export function backgroundColor(): string {
    return getComputedStyle(document.documentElement).getPropertyValue('--light-color')
}

export function generateCvConfiguration(cv: CV, staticKeys: object): CvConfiguration {
    return {
        properties: { format: "a4", margin: "10px" },
        vars: [
            {
                key: "person",
                value: {
                    fullname: cv.name,
                    ocupation: cv.work_experience[0].job_position,
                    description: cv.person_description,
                    email: cv.email,
                    phone: environment.phoneNumber
                }
            }, {
                key: "static",
                value: staticKeys
            },
            {
                key: "stack",
                value: cv.skills.map(el => {
                    return { tech: el }
                })
            }, {
                key: "languages",
                value: cv.languages.map(el => {
                    return { lang: el }
                })
            },
            {
                key: "experiences",
                value: cv.work_experience.map(el => {
                    return {
                        company: el.company,
                        start_date: el.date_start,
                        end_date: el.date_end,
                        position: el.job_position,
                        achievements: `<ul>
                        ${el.achievements.map(ach => {
                            return `<li>${ach}</li>`;
                        }).join('')}
                        </ul>`
                    }
                }).reverse()
            },
            {
                key: "studies",
                value: cv.education_training.map(el => {
                    return {
                        deegree: el.degree,
                        company: el.college,
                        place: el.location,
                        start_date: el.date_start,
                        end_date: el.date_end,
                        certify_link: (el.certify_link) ? `<a href="${el.certify_link}">${el.certify_link}</a>` : ''
                    }
                }).reverse()
            }
        ]
    }
}
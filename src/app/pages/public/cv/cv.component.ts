import { Component, OnInit } from '@angular/core';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { CvManagerService } from 'src/app/services/firebase-manager/cv/cv-manager.service';
import { StorageManagerService } from 'src/app/services/firebase-manager/storage/storage-manager.service';
import {  hideLoading, showLoading } from 'src/app/models/utils-constants';
import { AuthenticationService } from 'src/app/services/firebase-manager/authentication/authentication.service';
import { CurriculumVitae } from 'src/app/models/interfaces/curriculum-vitae';
import { HttpService } from 'src/app/services/http/http.service';
import { CVConfiguration } from 'src/app/models/interfaces/cv-configuration';
import moment from 'moment';
import { environment } from 'src/environments/environment';

@Component({
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {
    protected cv: CurriculumVitae | null = null;
    protected showGenerator: boolean = this.isLogged;
    constructor(private cvm: CvManagerService,
        protected i18s: I18nService, private storage: StorageManagerService, private httpService: HttpService, private authf: AuthenticationService) {
        this.cvm.getCVData().then(result => {
            this.cv = result
        });
    }

    ngOnInit(): void { }
    downloadCV(): void {
        if (this.cv) {
            const multilanguageKeys = {
                contact: this.i18s.getValue("cv.contact"),
                languages: this.i18s.getValue("cv.languages"),
                stack: this.i18s.getValue("cv.skills"),
                experience: this.i18s.getValue("cv.work-experience"),
                studies: this.i18s.getValue("cv.education")
            }
            const configuration: CVConfiguration = this.generateCvConfiguration(this.cv, multilanguageKeys);
            showLoading();
            this.storage.getFileAsBlob("curriculumvitae_template.html")
                .then(file => this.httpService.generateCv(file, configuration))
                .then(result => {
                    var downloadURL = window.URL.createObjectURL(result);
                    var link = document.createElement('a');
                    link.href = downloadURL;
                    link.download = `CV_${this.i18s.lang.toUpperCase()}_GabrielAlexandruBotas_${moment().format("DD[_]MM[_]YYYY")}.pdf`;
                    link.click();
                }).finally(() => {
                    hideLoading();
                })
        }
    }

    //Getter & Setters
    protected get isLogged(): boolean {
        return this.authf.isLogged;
    }

    private generateCvConfiguration(cv: CurriculumVitae, staticKeys: object): CVConfiguration {
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
}

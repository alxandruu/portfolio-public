import { Component, OnInit } from '@angular/core';
import { CV, CvConfiguration } from 'src/app/models/interfaces';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { CvManagerService } from 'src/app/services/firebase-manager/cv/cv-manager.service';
import { StorageManagerService } from 'src/app/services/firebase-manager/storage/storage-manager.service';
import { currentDate, generateCvConfiguration, hideLoading, showLoading } from 'src/app/models/utils';
import { HttpPdfService } from 'src/app/services/http/http-pdf.service';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/firebase-manager/authentication/authentication.service';

@Component({
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {
    protected cv: CV | null = null;
    protected showGenerator: boolean = this.isLogged;
    constructor(private cvm: CvManagerService,
        protected i18s: I18nService, private storage: StorageManagerService, private httpPdf: HttpPdfService, private authf: AuthenticationService) {
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
            const configuration: CvConfiguration = generateCvConfiguration(this.cv, multilanguageKeys);
            showLoading();
            this.storage.getFileAsBlob("curriculumvitae_template.html")
                .then(file => this.httpPdf.generateCv(file, configuration))
                .then(result => {
                    var downloadURL = window.URL.createObjectURL(result);
                    var link = document.createElement('a');
                    link.href = downloadURL;
                    link.download = `CV_${this.i18s.lang.toUpperCase()}_GabrielAlexandruBotas_${currentDate("DD[_]MM[_]YYYY")}.pdf`;
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
}

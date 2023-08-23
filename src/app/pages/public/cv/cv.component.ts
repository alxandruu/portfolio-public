import { Component, OnInit } from '@angular/core';
import { CV } from 'src/app/models/interfaces';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { CvManagerService } from 'src/app/services/firebase-manager/cv/cv-manager.service';
import { WebsiteThemeService } from 'src/app/services/theme/website-theme.service';
import { showLoading, hideLoading, currentDate, backgroundColor, textColor } from 'src/app/models/utils';
import { generate } from 'rxjs';

@Component({
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {
  protected cv: CV | null = null;

  constructor(private cvm: CvManagerService, private webTheme: WebsiteThemeService,
    protected i18s: I18nService) {
    this.cvm.getCVData().then(result => {
      this.cv = result
    });
  }

  ngOnInit(): void { }
}

import { Component, OnInit } from '@angular/core';
import { CV } from 'src/app/models/interfaces';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { CvManagerService } from 'src/app/services/firebase-manager/cv/cv-manager.service';
import { WebsiteThemeService } from 'src/app/services/theme/website-theme.service';
import { showLoading, hideLoading, currentDate, backgroundColor, textColor } from 'src/app/models/utils';

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

  async downloadCV(): Promise<void> {
    const downloadDate = currentDate("DD[_]MM[_]YYYY");
    showLoading();
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'px',
      format: 'a4',
    });
    const pdfCvData = document.querySelector('#pdf-cv-data')! as HTMLElement;
    const cloneCvData = document.querySelector('.cv-data')!.cloneNode(true);
    await (pdfCvData.appendChild(cloneCvData));
    await (pdfCvData.style.width = "1200px");
    html2canvas(document.querySelector('#pdf-cv-data')!, {
      backgroundColor: backgroundColor(),
      scale:1,
      onclone: (clonedDoc, el) => {
        el.style.display = "block";
      }
    }).then((canvas: HTMLCanvasElement) => {
      doc.setFillColor(backgroundColor());
      doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), "F");
      doc.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 15, doc.internal.pageSize.getWidth() - 20, doc.internal.pageSize.getHeight() - 25, undefined, "SLOW");
      doc.save(`GabrielAlexandruBotas_CV_${this.i18s.lang.toUpperCase()}_${downloadDate}.pdf`);
    }).finally(() => {
      pdfCvData.removeChild(cloneCvData)
      hideLoading();
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CV } from 'src/app/_models/cv';
import html2canvas from 'html2canvas';
import $ from 'jquery';
import { jsPDF } from "jspdf";
import { I18nService } from 'src/app/_services/i18n/i18n.service';
import { CvManagerService } from 'src/app/_services/firebase-manager/cv/cv-manager.service';
import { StorageManagerService } from 'src/app/_services/firebase-manager/storage/storage-manager.service';
import { WebsiteThemeService } from 'src/app/_services/theme/website-theme.service';
import { UtilsMethods } from '../../_components/v1/_constants/Utils';

@Component({
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {
  cv!: CV;

  constructor(private cvm: CvManagerService, private webTheme: WebsiteThemeService, private sm: StorageManagerService,
    protected i18s: I18nService) {
  }

  ngOnInit(): void {
    this.cvm.getCVData().then(result => {
      this.sm.retrieveURLImageFromStorage(result.image).then((url) => {
        result.image = url as string;
      });
      result.work_experience = UtilsMethods.sortByDate(result.work_experience, "date_start", 'dd.MM.YYYY');
      result.education_training = UtilsMethods.sortByDate(result.education_training, "date_start", 'dd.MM.YYYY');
      this.cv = result;
    }
    );
  }

  downloadCV(): void {
    const element = $(".cv-data").clone().width(1400);
    $("#momentDIVPDF").append(element);

    let backgroundCanvas = (this.webTheme.theme == "light") ? "#f2fbe0" : "#1e1c23";
    let moment = new Date();
    let downloadDate = `${moment.getDate()}_${("0" + (moment.getMonth() + 1)).slice(-2)}_${moment.getFullYear()}`;
    UtilsMethods.showLoading();
    $("body").css("overflow", "hidden");
    html2canvas($("#momentDIVPDF .cv-data")[0], {
      scale: 2,
      backgroundColor: backgroundCanvas,
    }).then((canvas: any) => {
      let imgData = canvas.toDataURL('image/png');
      let doc = new jsPDF();
      doc.setFillColor(backgroundCanvas);
      doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), "F");
      doc.addImage(imgData, 'PNG', 10, 10, 190, 180, undefined, 'FAST');
      doc.save(`GabrielAlexandruBotas_CV_${this.i18s.lang.toUpperCase()}_${downloadDate}.pdf`);
    }).then(() => {
      UtilsMethods.hideLoading();
      $("body").css("overflow", "inherit");
      $("#momentDIVPDF").html('');
    });

  }
}

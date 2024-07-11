import { Component } from '@angular/core';
import { I18nService } from '../core/services/i18n/i18n.service';
import { CvManagerService } from '../core/services/firebase-manager/cv/cv-manager.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {
  constructor(protected i18s: I18nService, cvs: CvManagerService) {
    
  }

}

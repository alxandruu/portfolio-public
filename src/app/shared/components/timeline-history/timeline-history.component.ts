import { Component, Input, ViewEncapsulation } from '@angular/core';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { dateToString } from '../../static/static-methods';
import { CommonModule } from '@angular/common';

export interface TimelineHistory {
  date: {
    start: Date;
    end: Date | null;
  },
  title: string;
  headline: string | null;
  content: string
}

@Component({
  selector: 'component-timeline-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-history.component.html',
  styleUrls: ['./timeline-history.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class TimelineHistoryComponent {
  showDate = dateToString;
  @Input() fw_icon: string | null = null;
  @Input() title: string = "Title Timeline History";
  @Input() date_format: string = "DD/MM/YYYY";
  @Input() timeline: Array<TimelineHistory> = [
    {
      date: {
        start: new Date(),
        end: null
      },
      title: 'Titulo',
      headline: 'Encabezado',
      content: `<p>Descripción <b>HTML</b></p>`
    },

  ];

  constructor(protected i18s: I18nService) {

  }
}

import { Component, Input } from '@angular/core';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { dateToString } from '../../static/static-methods';
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
  templateUrl: './timeline-history.component.html',
  styleUrls: ['./timeline-history.component.scss']
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
      title: 'Desarrollador Java',
      headline: 'Soltel SL',
      content: `<ul style="list-style: inherit;">
        <li>Working for DIT - AEAT as technical staff.</li>
        <li>Participate in the creation of integration tests with JUnit, in order to prevent
            errors in applications that handle large amounts of data.</li>
    </ul>`
    },

  ];

  constructor(protected i18s: I18nService) {

  }
}

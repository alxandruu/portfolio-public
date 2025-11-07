import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { CommonModule, DatePipe } from '@angular/common';
import { TimelineHistory } from './types/timeline-history.interface';

@Component({
    selector: 'timeline-history',
    imports: [CommonModule],
    templateUrl: './timeline-history.component.html',
    styleUrls: ['./timeline-history.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TimelineHistoryComponent {
  datePipe: DatePipe = new DatePipe("en-US") // TODO change using localiztion
  readonly i18s = inject(I18nService)

  @Input() date_format: string = "dd/MM/YYYY";
  @Input() timeline: Array<TimelineHistory> = [];

}

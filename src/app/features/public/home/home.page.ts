import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fadeInOutAnimation } from 'src/app/core/animations/fade-in-out.animation';
import { IconLinkedinComponent } from 'src/app/core/components/icons/icon-linkedin/icon-linkedin.component';
import { IconMailComponent } from 'src/app/core/components/icons/icon-mail/icon-mail.component';
import { TimelineHistoryComponent } from 'src/app/core/components/timeline-history/timeline-history.component';
import { TimelineHistory } from 'src/app/core/components/timeline-history/types/timeline-history.interface';
import { UserInformationService } from 'src/app/core/services/firebase-manager/user-information.service';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { HomeProfile } from 'src/app/core/types/profile.interface';

@Component({
  templateUrl: './home.page.html',
  imports: [CommonModule, RouterModule, TimelineHistoryComponent, IconLinkedinComponent, IconMailComponent],
  standalone: true,
  styleUrls: ['./home.page.scss'],
  animations: [
    fadeInOutAnimation,
  ]
})
export class HomePage implements OnInit {
  private userinfoSrv = inject(UserInformationService)
  protected i18s = inject(I18nService)
  profile = signal<HomeProfile | null>(null)
  work_experience = signal<Array<TimelineHistory> | null>(null)

  ngOnInit(): void {
    this.userinfoSrv.requestProfile().then(data => {
      this.profile.set(data)
    })

    this.userinfoSrv.requestCurriculumVitae().then(data => {
      this.work_experience.set(data.work_experience
        .sort((a, b) => (a.date.start < b.date.start) ? 1 : -1)
        .map(v => {
          return {
            title: v.position,
            content: v.description,
            headline: v.company + " - " + v.location,
            date: {
              end: v.date.end ? v.date.end.toDate() : null,
              start: v.date.start.toDate()
            }
          } as TimelineHistory
        }))

    })
  }
}

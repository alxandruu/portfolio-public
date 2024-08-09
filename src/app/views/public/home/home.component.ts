import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EMPTY_PROFILE, HomeProfile, Profile } from 'src/app/core/models/interfaces/profile';
import { sortByDate } from 'src/app/core/models/utils/utilities';
import { AuthenticationService } from 'src/app/core/services/firebase-manager/authentication/authentication.service';
import { OthersManagerService } from 'src/app/core/services/firebase-manager/others/others-manager.service';
import { StorageManagerService } from 'src/app/core/services/firebase-manager/storage/storage-manager.service';
import { UserInformationService } from 'src/app/core/services/firebase-manager/user-information/user-information.service';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { AdministrationComponentsModule } from 'src/app/shared/components/administration/administration-components.module';
import { TimelineHistory, TimelineHistoryComponent } from 'src/app/shared/components/timeline-history/timeline-history.component';
import { fadeInfadeOutAnimation } from 'src/app/shared/static/animations';
@Component({
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, AdministrationComponentsModule, RouterModule, TimelineHistoryComponent],
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInfadeOutAnimation,
  ]
})
export class HomeComponent {
  profile!: HomeProfile;
  work_experience!: Array<TimelineHistory>;


  constructor(private om: OthersManagerService, private sm: StorageManagerService, protected i18s: I18nService, private userinfoSrv: UserInformationService) {
    this.userinfoSrv.requestProfile().then(data => {
      this.profile = data;
    })
    this.userinfoSrv.requestCurriculumVitae().then(data => {
      this.work_experience = data.work_experience
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
        })

    })

  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeProfile } from 'src/app/core/models/interfaces/profile';
import { UserInformationService } from 'src/app/core/services/firebase-manager/user-information/user-information.service';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { AdministrationComponentsModule } from 'src/app/shared/components/administration/administration-components.module';
import { fadeInOutAnimation } from 'src/app/shared/static/animations';
import { IconsModule } from "../../../shared/components/icons/icons.module";

@Component({
  templateUrl: './home.page.html',
  imports: [CommonModule, AdministrationComponentsModule, RouterModule, IconsModule],
  standalone: true,
  styleUrls: ['./home.page.scss'],
  animations: [
    fadeInOutAnimation,
  ]
})
export class HomePage {
  profile!: HomeProfile;


  constructor(protected i18s: I18nService, private userinfoSrv: UserInformationService) {
    this.userinfoSrv.requestProfile().then(data => {
      this.profile = data;
    })
  }

}

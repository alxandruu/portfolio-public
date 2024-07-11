import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EMPTY_PROFILE, Profile } from 'src/app/core/models/interfaces/profile';
import { AuthenticationService } from 'src/app/core/services/firebase-manager/authentication/authentication.service';
import { OthersManagerService } from 'src/app/core/services/firebase-manager/others/others-manager.service';
import { StorageManagerService } from 'src/app/core/services/firebase-manager/storage/storage-manager.service';
import { AdministrationComponentsModule } from 'src/app/shared/components/administration/administration-components.module';
import { fadeInfadeOutAnimation } from 'src/app/shared/static/animations';
@Component({
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, AdministrationComponentsModule, RouterModule],
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInfadeOutAnimation,
  ]
})
export class HomeComponent {
  portfolio!: Profile;

  constructor(private om: OthersManagerService, private sm: StorageManagerService) {
    this.om.getProfileData().then(async data => {
      data.img = await this.sm.retrieveURLImageFromStorage(data.img);
      this.portfolio = data;
    });

  }
}

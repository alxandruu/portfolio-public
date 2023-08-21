import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as ApplicationConstants from 'src/app/app-constants';
import { AuthenticationService } from 'src/app/services/firebase-manager/authentication/authentication.service';
import { StorageManagerService } from 'src/app/services/firebase-manager/storage/storage-manager.service';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  protected imagePath: string = "";
  protected hasError: boolean = false;
  protected password: string = "";

  constructor(private router: Router, private authf: AuthenticationService, private sm: StorageManagerService, protected i18s: I18nService) {
    this.sm.retrieveURLImageFromStorage(ApplicationConstants.portfolioImageURL).then((data) => {
      this.imagePath = data;
    })

  }

  login() {
    this.authf.loginAdmin(environment.loginEmail, this.password).then(() => {
      this.router.navigate(['/'])
    }).catch(() => {
      this.hasError = true;
    });
  }


}

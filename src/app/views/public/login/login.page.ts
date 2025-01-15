import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PORTFOLIO_IMAGE_URL } from 'src/app/core/models/utils/constants';
import { AuthenticationService } from 'src/app/core/services/firebase-manager/authentication/authentication.service';
import { StorageManagerService } from 'src/app/core/services/firebase-manager/storage/storage-manager.service';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './login.page.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  

  protected imagePath: string = "";
  protected hasError: boolean = false;

  constructor(private router: Router, private authf: AuthenticationService, private sm: StorageManagerService, protected i18s: I18nService) {
    this.sm.retrieveURLImageFromStorage(PORTFOLIO_IMAGE_URL).then((data) => {
      this.imagePath = data;
    })

  }

  login(form: NgForm) {
    this.authf.loginAdmin(environment.loginEmail, form.value.password).then(() => {
      this.router.navigate(['/'])
    }).catch(() => {
      this.hasError = true;
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/_models/profile';
import { AuthenticationService } from 'src/app/_services/firebase-manager/authentication/authentication.service';
import { OthersManagerService } from 'src/app/_services/firebase-manager/others/others-manager.service';
import { StorageManagerService } from 'src/app/_services/firebase-manager/storage/storage-manager.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  portfolio!: Profile;

  constructor(private authf: AuthenticationService, private om: OthersManagerService, private sm: StorageManagerService) {
    this.om.getProfileData().then(result => {
      this.sm.retrieveURLImageFromStorage(result.img).then((url) => {
        result.img = url as string;
      });
      this.portfolio = result;
    });

  }

  ngOnInit(): void {
    
  }

  //Getter & Setters
  protected get isLogged(): boolean {
    return this.authf.isLogged;
  }

}

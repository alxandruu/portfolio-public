import { Injectable } from '@angular/core';
import { onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { firstValueFrom, Observable } from 'rxjs';
import { RegisterRow } from 'src/app/models/interfaces';
import { OthersManagerService } from '../others/others-manager.service';
import { Timestamp } from 'firebase/firestore';
import * as ApplicationConstants from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _user$: Observable<User | null>;
  private _isLogged!: boolean;
  private _userE!: string;

  constructor(private auth: Auth, private om: OthersManagerService) {
    this._user$ = new Observable((observer: any) =>
      onAuthStateChanged(auth, observer)
    );
    firstValueFrom(this.user$).then((data) => {
      if (data) {
        this.isLogged = true;
        this.userEmail = data.email!;
      } else {
        this.isLogged = false;
      }
    });
  }



  // Methods
  loginAdmin(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password).then((user) => {
      this.isLogged = true;
      this.userEmail = user.user.email!;
      let register: RegisterRow = {
        timestamp: Timestamp.now(),
        user: this.userEmail,
        type: ApplicationConstants.registerConstants.types.success,
        action: ApplicationConstants.registerConstants.actions.login,
        referenceAfter: null,
        referenceBefore: null
      }
      this.om.registerAction(register);
    });
  }

  logout(): void {
    this.auth.signOut();
    window.location.reload();
  }


  // Getters & Setters
  private get user$(): Observable<User | null> {
    return this._user$;
  }
  private set user$(value: Observable<User | null>) {
    this._user$ = value;
  }

  public get isLogged(): boolean {
    return this._isLogged;
  }
  private set isLogged(value: boolean) {
    this._isLogged = value;
  }

  public get userEmail(): string {
    return this._userE;
  }
  private set userEmail(value: string) {
    this._userE = value;
  }


}

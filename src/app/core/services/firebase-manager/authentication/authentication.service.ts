import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';
import { firstValueFrom, Observable } from 'rxjs';
import { REGISTER_ACTIONS } from 'src/app/core/enums/register-actions.enum';
import { REGISTER_TYPES } from 'src/app/core/enums/register-types.enum';
import { RegisterRow } from 'src/app/core/types/register.interface';
import { OthersManagerService } from '../others/others-manager.service';

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
        type: REGISTER_TYPES.SUCCESS,
        action: REGISTER_ACTIONS.LOGIN,
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

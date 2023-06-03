import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginActivate implements CanActivate {
  constructor(private auth: Auth, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user$ = new Observable((observer: any) =>
      onAuthStateChanged(this.auth, observer)
    );
    return firstValueFrom(user$).then((data) => {
      if (data) {
        this.router.navigate(['/'])
        return false;
      } else {
        return true;
      }
    });
  }

}

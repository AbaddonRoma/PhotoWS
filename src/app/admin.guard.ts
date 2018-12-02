import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {HttpClient} from '@angular/common/http';
import {IsLogged} from './admin/interfaces/is-logged';
// import {AuthService} from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private http: HttpClient,
              private router: Router,
              // private authService: AuthService
              ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const authStatusUrl = 'http://localhost:3000/user/islogged';
    return this.http.get(authStatusUrl).pipe(
      map((e: IsLogged) => {
        if (e.response === 'loggedIn') {
          return true;
        }
      }),
      catchError((err) => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}

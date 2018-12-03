import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {shareReplay, tap} from 'rxjs/operators';
import {Responce} from './interfaces/auth-responce-interface';
import * as moment from 'moment';
import {Observable} from 'rxjs';
import {IsLogged} from '../admin/interfaces/is-logged';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly URL = 'http://localhost:3000/';
  readonly header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    })
  };

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    const data = {
      'username': email,
      'password': password
    };
    return this.http.post<Responce>(this.URL + 'user/login', JSON.stringify(data), this.header)
      .pipe(
        tap(res => {
          this.setSession(res);
        }),
        shareReplay()
      );
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public isLogged(): Observable<IsLogged> {
    return this.http.get<IsLogged>(this.URL + 'user/islogged');
  }
}

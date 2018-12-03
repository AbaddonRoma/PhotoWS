import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Responce} from './interfaces/auth-responce-interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    // console.log(localStorage.length);
  }

  login(email: string, password: string) {
    this.authService.login(email, password)
      .subscribe((res: Responce) => {
        console.log(res);
        if (res.message === 'Auth success') {
          this.router.navigate(['/admin']);
        }
      });
  }

  isLogged() {
    this.authService.isLoggedIn();
  }

  getExpiration() {
    this.authService.getExpiration();
  }

}

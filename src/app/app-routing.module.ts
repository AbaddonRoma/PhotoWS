import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {AdminGuard} from './admin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

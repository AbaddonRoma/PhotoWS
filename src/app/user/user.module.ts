import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserComponent} from './user.component';
import {NgbCarousel, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    // NgbCarousel
  ],
})
export class UserModule { }

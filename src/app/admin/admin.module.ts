import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminContactsComponent } from './admin-contacts/admin-contacts.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminSliderComponent } from './admin-slider/admin-slider.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminContactsComponent,
    AdminInfoComponent,
    AdminSliderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

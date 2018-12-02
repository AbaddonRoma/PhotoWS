import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCategoryRoutingModule } from './admin-category-routing.module';
import {AdminCategoryComponent} from './admin-category.component';
import {AdminAlbumComponent} from './admin-album/admin-album.component';


@NgModule({
  declarations: [
    AdminCategoryComponent,
    AdminAlbumComponent
  ],
  imports: [
    CommonModule,
    AdminCategoryRoutingModule
  ]
})
export class AdminCategoryModule { }

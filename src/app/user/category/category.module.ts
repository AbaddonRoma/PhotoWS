import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import {CategoryComponent} from './category.component';
import {AlbumComponent} from './album/album.component';

@NgModule({
  declarations: [
    CategoryComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminCategoryComponent} from './admin-category.component';
import {AdminAlbumComponent} from './admin-album/admin-album.component';

const routes: Routes = [
  {
    path: '',
    component: AdminCategoryComponent
  },
  {
    path: 'album',
    component: AdminAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCategoryRoutingModule { }

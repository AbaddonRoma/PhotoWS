import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminCategoryModule} from './admin-category/admin-category.module';
import {AdminContactsComponent} from './admin-contacts/admin-contacts.component';
import {AdminInfoComponent} from './admin-info/admin-info.component';
import {AdminSliderComponent} from './admin-slider/admin-slider.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'category',
    loadChildren: './admin-category/admin-category.module#AdminCategoryModule'
  },
  {
    path: 'contacts',
    component: AdminContactsComponent
  },
  {
    path: 'info',
    component: AdminInfoComponent
  },
  {
    path: 'slider',
    component: AdminSliderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  LoginComponent
} from './';
import {RouteConstants} from '../utils/route-constants';

const adminRoutes: Routes = [
  {
    path: '', redirectTo: RouteConstants.LOGIN, pathMatch: 'full'
  },
  {
    path: RouteConstants.LOGIN,
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      adminRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../core/guards/auth-guard';
import {LoginGuard} from '../core/guards/login-guard';
import {
  LoginComponent,
  EventsComponent,
  EventContainerComponent
} from './';
import {RouteConstants} from '../utils/route-constants';

const clientRoutes: Routes = [
  {
    path: '', redirectTo: RouteConstants.LOGIN, pathMatch: 'full'
  },
  {
    path: RouteConstants.LOGIN,
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: RouteConstants.EVENTS,
    component: EventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: RouteConstants.EVENT,
    component: EventContainerComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      clientRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ClientRoutingModule {
}

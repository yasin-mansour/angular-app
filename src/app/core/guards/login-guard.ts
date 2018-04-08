import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router";
import {RouteConstants} from "../../utils/route-constants";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.hasToken()) {
      this.router.navigate([RouteConstants.EVENTS]);
      return false;
    } else {
      return true;
    }
  }
}

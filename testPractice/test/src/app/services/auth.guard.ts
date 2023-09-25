import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { AccountService } from "../account.service";
  
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private _service: AccountService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
         
          if (this._service.isLoggedIn()) {
            const expectedRole = route.data["expectedRole"];
            console.log(expectedRole)
            if (expectedRole) {
              const userRole = this._service.getRole();
              console.log(userRole)
              if (userRole && userRole.toLowerCase() === expectedRole.toLowerCase()) {
                return true;
              } else {
                this.router.navigate(["notaccess"]);
                return false;
              }
            } else {
              return true;
            }
          } else {
            this.router.navigate(["notaccess"]);
            return false;
          }
    }
}
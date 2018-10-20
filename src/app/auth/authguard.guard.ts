import { Injectable } from '@angular/core';
/**canactivate : Interface that a class can implement to be a guard deciding if a route can be activated. */
/**ActivatedRouteSnapshot : Contains the information about a route associated with a component loaded in an outlet at a particular moment in time. 
 * ActivatedRouteSnapshot can also be used to traverse the router state tree. */
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router} from '@angular/router';
/**RouterStateSnapshot : This is a tree of activated route snapshots. Every node in this tree knows about the "consumed" URL segments, the extracted parameters, and the resolved data. */
import { Observable } from 'rxjs';/**A representation of any set of values over any amount of time */
import { AuthService } from '../../app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['login']);
        alert("Cannot enter into dashboard without Login.....So please login..................");
        return false;
      }
      // alert("Authentication Successfull.....");
      return true;
    }
  
  }

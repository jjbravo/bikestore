import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserRouteAccessService implements CanActivate{

  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const authorities = route.data['authorities'];

    return this.checkLogin(authorities, state.url);
  }

  checkLogin(authorities: string[], url: string): Observable<boolean> {
    return this.accountService.identity()
    .pipe(map(account => {
        if (!authorities || authorities.length === 0) {
          return true;
        }

        if (account) {
          const hasAnyAuthority = this.accountService.hasAnyAuthority(authorities);
          if (hasAnyAuthority) {
            return true;
          }

          this.router.navigate(['accessdenied']);
          return false;
        }

        this.router.navigate(['/login']);
        return false;
    }));
  }
}

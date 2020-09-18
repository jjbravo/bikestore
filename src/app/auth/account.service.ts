import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredentials } from './auth-shared/models/credentials.model';
import { Observable, of, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from './auth-shared/models/account.model';
import { catchError, tap, shareReplay, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { createRequestOption } from '../shared/request_utils';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private authenticationState = new ReplaySubject<Account | null>(1);
  private userIdentity: Account | null = null;
  private accountCache?: Observable<Account | null>;

  constructor( private http: HttpClient, private router: Router) { }

  /**
   * Create new account
   * @param account
   */
  save(account: ICredentials): Observable<ICredentials> {
    return this.http.post<ICredentials>(`${environment.END_POINT}/api/account`, account);
  }

  /**
   * identity to user in backend
   */
  identity(force?: boolean): Observable<Account| null> {
    if (!this.accountCache || force || !this.isAuthenticated()) {
      this.accountCache = this.fetch()
      .pipe(catchError(() => {
        return of(null);
      }),
      tap((account: Account | null) => {
        this.authenticate(account);
        if (account) {
          this.router.navigate(['/dashboard']);
        }
      }),
      shareReplay()
      );

    }
    return this.accountCache;
  }

  authenticate(identity: Account | null): void {
    this.userIdentity = identity;
  }

  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }


  getNameUser(): string {
    return this.userIdentity.name + ' ' + this.userIdentity.lastName;
  }

  getAuthenticationState(): Observable<Account | null> {
    return this.authenticationState.asObservable();
  }

  hasAnyAuthority(authorities: string[] | string): boolean {
    if (! this.userIdentity || !this.userIdentity.authorities) {
      return false;
    }

    if (!Array.isArray(authorities)) {
      authorities = [authorities];
    }
    console.warn('userIdentity.authorities ', this.userIdentity);

    return this.userIdentity.authorities.some((authority: string) => authorities.includes(authority));
  }


  private fetch(): Observable<Account> {
    const jwt = localStorage.getItem('token') ||  sessionStorage.getItem('token');
    if (jwt) {
      const payload: any = JSON.parse(atob(jwt.split('.')[1]));
      const params = createRequestOption({username: payload.user_name });
      return this.http.get<Account>(`${environment.END_POINT}/api/user/account`, {params: params});
   }
  }
}

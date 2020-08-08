import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredentials } from '../shared/models/credentials.model';
import { Observable, of, identity, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from './login/account.model';
import { catchError, tap, shareReplay, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private authenticationState = new ReplaySubject<Account | null>(1);
  private userIdentity: Account | null = null;
  private accountCache?: Observable<Account | null>;

  constructor( private http: HttpClient, private router: Router) { }

  save(account: ICredentials): Observable<ICredentials> {
    return this.http.post<ICredentials>(`${environment.END_POINT}/api/account`, account);
  }

  /**
   * identity to user in backend
   */
  identity(force?: boolean): Observable<Account| null> {
    if (!this.accountCache || force || !this.isAuthenticated()) {
      console.warn('Identity init - force ', force);
      this.accountCache = this.fetch()
      .pipe(catchError(() => {
        return of(null);
      }),
      tap((account: Account | null) => {
        console.log('Account ', account);
        this.authenticate(account);
        if (account) {
          this.router.navigate(['/dashboard']);
          console.log('Account existe .. ', account);
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

    return this.userIdentity.authorities.some((authority: string) => authorities.includes(authority));
  }

  private fetch(): Observable<Account> {
    console.log('fetch...');
    return this.http.get<Account>(`${environment.END_POINT}/api/account`);
  }
}
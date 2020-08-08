import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ICredentials } from 'src/app/shared/models/credentials.model';
import { AccountService } from '../account.service';
import { AuthService } from './auth.service';
import { Account } from './account.model';


@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
        private accountService: AccountService,
        private authService: AuthService) {}

  login(credentials: ICredentials): Observable<Account | null> {
    return this.authService.login(credentials).pipe(flatMap(() => this.accountService.identity(true)));
  }

  logout(): void {
    this.authService.logout().subscribe(null, null, () => this.accountService.authenticate(null));
  }
}

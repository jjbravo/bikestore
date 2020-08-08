import { Injectable } from '@angular/core';
import { ICredentials, Credentials } from 'src/app/auth/auth-shared/models/credentials.model';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
    ) { }

  login(credentials: ICredentials): Observable<any> {
    const data = {
      username: credentials.username,
      password: credentials.password,
      rememberMe: credentials.rememberMe,
    };

    return this.http.post<any>(`${environment.END_POINT}/api/authenticate`, data, {observe: 'response'})
    .pipe(map(res => {
      const bearerToken = res.headers.get('Authorization');
      if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        const jwt = bearerToken.slice(7, bearerToken.length);
        this.storeAuthenticationToken(jwt, credentials.rememberMe);
        return jwt;
      }
    }));
  }

  storeAuthenticationToken(jwt: string, rememberMe: boolean): void {
    if (rememberMe) {
      localStorage.setItem('token', jwt);
    } else {
      sessionStorage.setItem('token', jwt);
    }
  }

  logout(): Observable<any> {
    return new Observable(observe => {
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      observe.complete();
    });
  }
}

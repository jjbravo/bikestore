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
    // *************

    const credenciales = btoa('inventory' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });

    const params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', credentials.username);
    params.set('password', credentials.password);

    console.log(params.toString());
  //  return this.http.post<any>(urlEndpoint, params.toString(), { headers: httpHeaders });
    // *************
    return this.http.post<any>(`${environment.END_POINT}/oauth/token`, params.toString(), { headers: httpHeaders, observe: 'response' })
    .pipe(map(res => {
      console.warn('RES ', res);
      const jwt = res.body.access_token;
     
      this.storeAuthenticationToken(jwt, credentials.rememberMe);
      /*
      const bearerToken = res.headers.get('Authorization');
      if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        const jwt = bearerToken.slice(7, bearerToken.length);
        this.storeAuthenticationToken(jwt, credentials.rememberMe);
        return jwt;
      }
      */
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

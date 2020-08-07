import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor( private http: HttpClient) { }

  save(account: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${environment.END_POINT}/api/account`, account);
  }

}

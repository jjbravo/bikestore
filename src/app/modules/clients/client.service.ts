import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IClient } from './client.model';
import { createRequestOption } from 'src/app/shared/request_utils';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  public query(): Observable<IClient[]> {
    return this.http.get<IClient[]>(`${environment.END_POINT}/api/clients`)
    .pipe(map(res => {
      return res;
    }));
  }

  public queryParam(req?: any): Observable<IClient[]> {
    const params = createRequestOption(req);
    console.log(params);
    return this.http.get<IClient[]>(`${environment.END_POINT}/api/clients/find-by-document`, {params: params})
    .pipe(map(res => {
      return res;
    }));
  }

}

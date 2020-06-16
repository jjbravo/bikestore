import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ISale } from './sale.model';
@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  public query(): Observable<ISale[]> {
    return this.http.get<ISale[]>(`${environment.END_POINT}/api/sales`)
    .pipe(map(res => {
      return res;
    }));
  }
  public saveMultiple(saleList: ISale[]): Observable<ISale> {
    return this.http.post<ISale>(`${environment.END_POINT}/api/sales/multiple`, saleList)
    .pipe(map(res => {
      return res;
    }));
  }

}

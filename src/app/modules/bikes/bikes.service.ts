import { Injectable } from '@angular/core';
import { IBike } from './model/bike';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { createRequestOption } from 'src/app/shared/request_utils';
@Injectable({
  providedIn: 'root'
})
export class BikesService {

  constructor(private http: HttpClient) { }

  public query(req?: any): Observable<IBike[]> {
    const params = createRequestOption(req);
    return this.http.get<IBike[]>(`${environment.END_POINT}/api/bikes`, { params: params })
    .pipe(map(res => {
      return res;
    }));
  }
  public save(bike: IBike): Observable<IBike> {
    return this.http.post<IBike>(`${environment.END_POINT}/api/bikes`, bike)
    .pipe(map(res => {
      return res;
    }));
  }

  public update(bike: IBike): Observable<IBike> {
    return this.http.put<IBike>(`${environment.END_POINT}/api/bikes`, bike)
    .pipe(map(res => {
      return res;
    }));
  }

  public getBikeById(id: any): Observable<IBike> {
    return this.http.get<IBike>(`${environment.END_POINT}/api/bikes/${id}`)
    .pipe(map(res => {
      return res;
    }));
  }
  public findBikeBySerial(serial: string): Observable<IBike> {
    const params = createRequestOption(serial);
    console.log("params",params);
    return this.http.get<IBike>(`${environment.END_POINT}/api/bikes/validation-serial`, {params: params})
    .pipe(map(res => {
      return res;
    }));
  }

  public queryComments(): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/comments`)
    .pipe(map(res => {
      return res;
    }));
  }

  public findCommentsByPostId(postId: string): Observable<any[]> {
    let params = new HttpParams();
		params = params.append('postId', postId);
    console.log("params", params);
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/comments`, {params: params})
    .pipe(map(res => {
      return res;
    }));
  }

  public delete(id: string): Observable<IBike> {
    return this.http.delete<IBike>(`${environment.END_POINT}/api/bikes/${id}`)
    .pipe(map(res => {
      return res;
    }));
  }
}

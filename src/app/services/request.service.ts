import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IRequest } from '../models/requestInterface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl = 'https://roaster-staging.herokuapp.com/api/v1';

  constructor(private http: HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getRequest() {
    return this.http.get<IRequest>(`${this.baseUrl + "/request/all/"}`);
  }

  getRequestByUser(userId) {
    return this.http.get<IRequest>(`${this.baseUrl + "/request/userid/"}`, userId);
  }

  getRequestByDate(date) {
    return this.http.get<IRequest>(`${this.baseUrl + "/request/"}`, date);
  }

  postRequest(requests) {
    return this.http.post(this.baseUrl + "/request/new", requests)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }
}


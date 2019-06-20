import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Roaster} from '../models/roaster';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  baseUrl = 'https://roaster-staging.herokuapp.com/api/v1';

  constructor(private http: HttpClient) { }

  postMessage(roaster) {
    return this.http.post(this.baseUrl + '/roaster/create/', roaster);
  }

  getMessages(userId) {
    return this.http.get<Roaster>(this.baseUrl + '/chat/' + userId);
  }
}

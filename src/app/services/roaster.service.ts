import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IRoaster } from '../models/roaster';

@Injectable({
  providedIn: 'root'
})
export class RoasterService {


  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  baseUrl = 'https://roaster-staging.herokuapp.com/api/v1';

  constructor(private http: HttpClient) { }

  postRoater(roaster) {
    return this.http.post(this.baseUrl + "/roaster/create/", roaster);
  }

  getRoaster(userId) {
    return this.http.get<IRoaster>(this.baseUrl + "/roaster/", userId);
  }

  updateRoaster(roasterId){
    return this.http.put(this.baseUrl + "/roaster/update/completed/", roasterId)
  }
}

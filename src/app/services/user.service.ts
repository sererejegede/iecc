import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/user';
import { IBank } from '../models/bank';
import { IupdateObservations } from '../models/updateObservations';
import { IpostObservations } from '../models/postObservations';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private selectedUser = new Subject<any>();
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  baseUrl = 'https://roaster-staging.herokuapp.com/api/v1';

  constructor(private http: HttpClient) { }

  postUser(user) {
    return this.http.post(this.baseUrl + "/user/register", user);
  }

  loginUser(auth) {
    return this.http.post(this.baseUrl + "/user/login", auth, this.options);
  }

  getAllUser() {
    return this.http.get<IUser>(this.baseUrl + "/user/all");
  }

  getUserById(userId) { 
    return this.http.get<IUser>(this.baseUrl + "/user/data", userId);
  }

  updateProfileImage(userId) {
    return this.http.post(this.baseUrl + "/user/update/picture", userId);
  }

  forgetPassword(email) {
    return this.http.post(this.baseUrl + "/user/forgot-password", email);
  }

  getStaffs() {
    return this.http.get<IUser>(this.baseUrl + "/user/staffs");
  }

  postBank(bank) {
    return this.http.post(this.baseUrl + "/user/bank", bank);
  }

  getBankById(userId) {
    return this.http.get<IBank>(this.baseUrl + "/user/bank", userId);
  }

  postObservationRecord(observation) {
    return this.http.post<IpostObservations>(this.baseUrl + "/user/observation", observation);
  }

  updateObservationRecord(observationId) {
    return this.http.post<IupdateObservations>(this.baseUrl + "/user/observation", observationId);
  }

  getObservationRecord(userId) {
    return this.http.get(this.baseUrl + "/user/observation", userId);
  }

  selectUser(user) {
    this.selectedUser.next(user);
  }
}

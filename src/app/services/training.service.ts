import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  public baseUrl = 'https://roaster-staging.herokuapp.com/api/v1';

  constructor(private http: HttpClient) {}

  public getUserTrainings(userId) {
    return this.http.get(`${this.baseUrl}/development/training/${userId}`);
  }

  public saveTraining(data) {
    return this.http.post(`${this.baseUrl}/development/training/save`, data);
  }
}

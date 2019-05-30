import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { IClient } from '../models/client';
// import { Subject } from 'rxjs/Subject';


@Injectable()
export class CustomersService {
    private selectedCustomer = new Subject<any>();
    customerSelected = this.selectedCustomer.asObservable();
    baseUrl = 'https://roaster-staging.herokuapp.com/api/v1';
    constructor(private http: HttpClient) { }

    getClients() {
        return this.http.get<IClient>(this.baseUrl + "/client/all");
    }

    postClients(client) {
        return this.http.post("https://roaster-staging.herokuapp.com/api/v1/client/save", client);
    }

    getClient(clientid) {
        return this.http.get(`${this.baseUrl}/client/${clientid}`);
    }

    authLogin(email, password) {
        return this.http.get(`${this.baseUrl}/${email}/login?password=${password}`);
    }
}
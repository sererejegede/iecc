import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Client } from '../models/client';


@Injectable({
    providedIn: 'root'
})
export class ClientService {

    baseUrl = 'https://roaster-staging.herokuapp.com/api/v1';

    constructor(private http: HttpClient) { }

    private _refreshNeeded$ = new Subject<void>();

    get refreshNeeded$() {
        return this._refreshNeeded$;
    }

    getClients() {
        return this.http.get<Client>(`${this.baseUrl + "/client/all"}`);
    }

    postClients(client) {
        return this.http.post(this.baseUrl + "/client/save", client)
            .pipe(
                tap(() => {
                    this._refreshNeeded$.next();
                })
            );
    }

    getClient(clientid) {
        return this.http.get(`${this.baseUrl}/client/${clientid}`);
    }

}
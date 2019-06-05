import { Component, OnInit } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/clients.service';
import { BroadCastSelectedUserService } from 'src/app/services/broadcast-selected-user.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  newClientPopup = false;

  clients: Client[] = [];
  selectedClient: Client;

  constructor(private _pageloaderService: pageloaderService,
    private router: Router, private _clientService: ClientService, private _broadCastSelectedUser: BroadCastSelectedUserService) {
    this._broadCastSelectedUser.reloadAnnouncedSource$.subscribe(() => {
      this.getClients();
    });
  }

  ngOnInit() {
    this._pageloaderService.setTitle('Clients')
    this._clientService.refreshNeeded$.subscribe(() => {
      this.getClients();
    });
    this.getClients();
  }


  getClients() {
    this._clientService.getClients().subscribe(
      (payload: Client[]) => {
        this.clients = payload.data;
      },
      (error) => { }
    );
  }

  announceClient(this, client) {
    this._broadCastSelectedUser.announceUserSelectedOperation(client);
  }

  onSelectedClient(client: Client) {
    this.selectedClient = client;
  }

  close_onClick(e) {
    this.newClientPopup = false;
  }


  onShowNewClient() {
    this.newClientPopup = true;
  }

  onShowDetail() {
    this.router.navigate(['core-module/client-details']);
  }
}

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
  clientChunks: Client[] = [];
  selectedClient: Client;
  private pagination = {
    page: 0,
    length: 0,
    array_chunks: []
  };

  constructor(private _pageloaderService: pageloaderService,
    private router: Router, private _clientService: ClientService, private _broadCastSelectedUser: BroadCastSelectedUserService) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Clients');
    this.getClients();
  }


  getClients() {
    this._clientService.getClients().subscribe(
      (payload: any) => {
        this.clients = JSON.parse(JSON.stringify(payload.data));
        this.pagination.array_chunks = this.chunkArray(3);
        this.pagination.length = this.pagination.array_chunks.length;
        // Call the loadMore() method to do the first pagination
        this.loadMore();
      },
      (error) => { }
    );
  }

  private chunkArray(chunk_size) {
    const results = [];
    while (this.clients.length) {
      results.push(this.clients.splice(0, chunk_size));
    }
    return results;
  }

  public loadMore() {
    if (this.pagination.page < this.pagination.length) {
      this.clientChunks = this.clientChunks.concat(this.pagination.array_chunks[this.pagination.page]);
      this.pagination.page += 1;
    }
  }

  onSelectedClient(client) {
    this.selectedClient = client;
    console.log(this.selectedClient);
    this.router.navigate(['/core-module/client-details', client._id ]);
  }

  close_onClick(e) {
    this.newClientPopup = false;
  }

  public getUpdatedClient(client) {
    console.log(this.selectedClient);
    if (this.selectedClient['index'] || this.selectedClient['index'] === 0) {
      this.clientChunks.splice(this.selectedClient['index'], 1, client.data);
    }
  }


  onShowNewClient(client?, index?) {
    if ((index || index === 0) && client) {
      this.selectedClient = client;
      this.selectedClient['index'] = index;
    } else {
      this.selectedClient = null;
    }
    this.newClientPopup = true;
  }

  onShowDetail() {
    this.router.navigate(['core-module/client-details']);
    // this.router.navigateByUrl('core-module/client-details');
  }
}

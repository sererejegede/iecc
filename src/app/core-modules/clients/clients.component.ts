import { Component, OnInit } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  newClientPopup = false;

  constructor(private _pageloaderService: pageloaderService,
    private router: Router) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Clients')
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

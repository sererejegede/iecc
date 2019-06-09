import { Component, OnInit } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { ClientService } from 'src/app/services/clients.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  user;

  constructor(private _pageloaderService: pageloaderService,
    private _locker: CoolLocalStorage,
    private _clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Setting')
    this.user = this._locker.getObject('selectedUser');
  }

  onLogout() {
    this.router.navigate(['/login']);
  }

}

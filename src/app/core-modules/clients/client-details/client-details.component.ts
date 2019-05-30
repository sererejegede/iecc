import { Component, OnInit } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {


  constructor(private _pageloaderService: pageloaderService,
    private router:Router) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Clients')
  }

  onBacktoClient(){
    this.router.navigate(['core-module/clients']);
  }

}

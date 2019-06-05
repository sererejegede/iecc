import { Component, OnInit } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  sub: Subscription;
  id = 0;
  selectedClient: any;

  constructor(private _pageloaderService: pageloaderService,
    private _clientService: ClientService,
    private _activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Clients')
    this.sub = this._activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this._clientService.getClient(this.id).subscribe(
        (payload : any) => {
          this.selectedClient = payload.data;
          console.log(payload);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  onBacktoClient() {
    this.router.navigate(['core-module/clients']);
  }

}

import { Component, OnInit } from '@angular/core';
import { pageloaderService } from './../../services/pageloaderService';
import { RequestService } from 'src/app/services/request.service';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { IRequest } from 'src/app/models/requestInterface';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  newRequest = false;
  user;
  requests: Request[] = [];

  constructor(private _pageloaderService: pageloaderService,
    private _locker: CoolLocalStorage,
    private _requestService: RequestService) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Request')
    this.user = this._locker.getObject('selectedUser');
    this.getAllRequest();
  }

  getRequestByUser() {
    this._requestService.getRequestByUser(this.user.data._id).subscribe(
      (payload: any) => {
        this.requests = payload.data;
        console.log(payload);
      },
      (error) => {

      }
    )
  }

  getAllRequest() {
    this._requestService.getRequest().subscribe(
      (payload: any) => {
        this.requests = payload.data;
        console.log(payload);
      },
      (error) => {

      }
    )
  }

  onShowNewRequest() {
    this.newRequest = true;
  }
  close_onClick(e) {
    this.newRequest = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { pageloaderService } from './../../services/pageloaderService';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  newRequest = false;

  constructor(private _pageloaderService: pageloaderService) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Request')
  }

  onShowNewRequest(){
    this.newRequest = true;
  }
  close_onClick(e) {
		this.newRequest = false;
	}
}

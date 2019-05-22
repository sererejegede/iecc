import { Component, OnInit } from '@angular/core';
import { pageloaderService } from './../../services/pageloaderService';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private _pageloaderService: pageloaderService) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Notifications')
  }
}

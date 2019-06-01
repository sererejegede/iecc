import { Component, OnInit, ViewChild } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';
import { toDate } from '@angular/common/src/i18n/format_date';
import { dateToLocalArray } from '@fullcalendar/core/datelib/marker';

@Component({
  selector: 'app-rota',
  templateUrl: './rota.component.html',
  styleUrls: ['./rota.component.scss']
})
export class RotaComponent implements OnInit {
  newRoaster = false;
  rotaDetail = false;

  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;

  constructor(private _pageloaderService: pageloaderService) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Rota')
    // this.selectedDate = Date.now;
  }

  close_onClick(e) {
    this.newRoaster = false;
    this.rotaDetail = false;
  }

  onShowAddRota() {
    this.newRoaster = true;
    this.rotaDetail = false;
  }
  onShowRotaDetail() {
    this.newRoaster = false;
    this.rotaDetail = true;
  }

  // onSelect() {
  
  // }
}

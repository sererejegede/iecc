import { Component, OnInit, ViewChild } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';
import { toDate } from '@angular/common/src/i18n/format_date';
import { dateToLocalArray } from '@fullcalendar/core/datelib/marker';
import { RoasterService } from 'src/app/services/roaster.service';
import { Roaster } from 'src/app/models/roaster';
import { CoolLocalStorage } from 'angular2-cool-storage';

@Component({
  selector: 'app-rota',
  templateUrl: './rota.component.html',
  styleUrls: ['./rota.component.scss']
})
export class RotaComponent implements OnInit {
  newRoaster = false;
  rotaDetail = false;
  user;
  roaster: Roaster[] = [];

  // @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: any;

  constructor(private _pageloaderService: pageloaderService,
    private _locker: CoolLocalStorage,
    private _roasterService: RoasterService) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Rota')
    this.user = this._locker.getObject('selectedUser');
    this.getAllRoaster();
    // this.selectedDate = Date.now;

  }

  getAllRoaster() {
    // this._roasterService.getRoaster(this.user.id).subscribe(
    //   (payload: any) => {
    //     this.roaster = payload.data;
    //     console.log(payload);
    //   },
    //   (error) => {

    //   }
    // )
  }

  getRoasterByDate() {
    this._roasterService.getRoasterByDate(this.selectedDate).subscribe(
      (payload: any) => {
        this.roaster = payload.data;
        console.log(payload);
      },
      (error) => {
        
      }
    )
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

  onSelect(event) {
    console.log(event);
    this.selectedDate = event;
    this.getRoasterByDate();
  }
}

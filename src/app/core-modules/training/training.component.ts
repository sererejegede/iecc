import { Component, OnInit, ViewChild } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';
// import moment = require('moment');

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  noTraining = false;
  traningAvailable = false
  // selectedDate: any;

  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;

  constructor(private _pageloaderService: pageloaderService) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Training')
    if (this.selectedDate === null) {
      this.noTraining = true;
    } else {
      this.traningAvailable = true;
      // this.onSelect(event);
    }
  }


  // onSelect(event) {
  //   console.log(event);
  //   this.selectedDate = event;
  // }

}

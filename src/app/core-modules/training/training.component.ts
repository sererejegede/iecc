import { Component, OnInit, ViewChild } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';
import {TrainingService} from '../../services/training.service';
import {CoolLocalStorage} from 'angular2-cool-storage';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
// import moment = require('moment');

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  noTraining = false;
  traningAvailable = false;
  public trainings: any[] = [];
  public dateTrainings: any[] = [];
  public trainingForm: FormGroup;
  // selectedDate: any;

  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;
  public user;

  static formControls = () => {
    return {
      userId: ['', []],
      title: ['', []],
      venue: ['', []],
      dateAttended: ['', []],
      expiresOn: ['', []],
      startTime: ['', []],
      endTime: ['', []],
      status: ['', []]
    };
  }

  constructor(private _pageloaderService: pageloaderService,
              private _trainingService: TrainingService,
              private _coolLocalStorage: CoolLocalStorage,
              private _fb: FormBuilder) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Training');
    this.user = this._coolLocalStorage.getObject('selectedUser');
    this.getUserTrainings();
    if (this.selectedDate === null) {
      this.noTraining = true;
    } else {
      this.traningAvailable = true;
      // this.onSelect(event);
    }
    console.log(this.selectedDate);
  }

  public createTraining() {

  }

  private getUserTrainings() {
    this._trainingService.getUserTrainings(this.user.data._id).subscribe((res: any) => {
      this.trainings = res.data;
      // this.setDate(new Moment());
    }, err => {
      swal.fire({
        type: 'error',
        title: 'An error occurred',
        showCancelButton: false,
        timer: 1500
      });
    });
  }

  public setDate(date) {
    date._i.month = date._i.month + 1;
    const date_object = {
      year: date._i.year,
      month: date._i.month.toString().length < 2 ? `0${date._i.month}` : date._i.month,
      date: date._i.date.toString().length < 2 ? `0${date._i.date}` : date._i.date,
    };
    const date_string = Object.values(date_object).join('-');
    this.dateTrainings = this.trainings.filter(training => training.dateAttended === date_string);
  }


  // onSelect(event) {
  //   console.log(event);
  //   this.selectedDate = event;
  // }

}

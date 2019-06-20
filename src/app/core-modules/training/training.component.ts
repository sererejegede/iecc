import { Component, OnInit, ViewChild } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Moment } from 'moment';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatCalendar} from '@angular/material';
import {TrainingService} from '../../services/training.service';
import {CoolLocalStorage} from 'angular2-cool-storage';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import {formatDate} from '@angular/common';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {UserService} from '../../services/user.service';
// import moment = require('moment');

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class TrainingComponent implements OnInit {

  noTraining = false;
  traningAvailable = false;
  public trainings: any[] = [];
  public dateTrainings: any[] = [];
  public trainingForm: FormGroup;
  public showModal = false;
  // selectedDate: any;

  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;
  public user;

  public users: any[] = [];
  static formControls = () => {
    return {
      userId: ['', []],
      title: ['', []],
      venue: [true, []],
      dateAttended: ['', []],
      expiresOn: ['', []],
      startTime: ['', []],
      endTime: ['', []],
      status: ['', []]
    };
  }

  constructor(private _pageloaderService: pageloaderService,
              private _trainingService: TrainingService,
              private _userService: UserService,
              private _coolLocalStorage: CoolLocalStorage,
              private _fb: FormBuilder) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Training');
    this.user = this._coolLocalStorage.getObject('selectedUser');
    this.trainingForm = this._fb.group(TrainingComponent.formControls());
    this.getUsers();
    this.getUserTrainings();
    if (this.selectedDate === null) {
      this.noTraining = true;
    } else {
      this.traningAvailable = true;
      // this.onSelect(event);
    }
    console.log(this.selectedDate);
  }

  private getUsers() {
    this._userService.getAllUser().subscribe(
      (payload: any) => {
        this.users = payload.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public createTraining() {
    console.log(this.trainingForm.value);
    const data = JSON.parse(JSON.stringify(this.trainingForm.value));
    data.dateAttended = data.dateAttended._i;
    data.expiresOn = data.expiresOn._i;
    data.userId = this.user.data._id;
    this._trainingService.saveTraining(data).subscribe((res: any) => {
      this.showModal = false;
      swal.fire({
        type: 'success',
        title: 'Training created successfully',
        showCancelButton: false,
        timer: 1500
      });
      this.trainings.push(res.data);
      this.setDate();
    }, err => {
      swal.fire({
        type: 'error',
        title: 'An error occurred',
        showCancelButton: false,
        timer: 1500
      });
    });
  }

  private getUserTrainings() {
    this._trainingService.getUserTrainings(this.user.data._id).subscribe((res: any) => {
      this.trainings = res.data;
      this.setDate();
    }, err => {
      swal.fire({
        type: 'error',
        title: 'An error occurred',
        showCancelButton: false,
        timer: 1500
      });
    });
  }

  public setDate(date?) {
    let date_string;
    if (!date) {
      date_string = new Date().toISOString().slice(0, 10);
    } else {
      date_string = this.dateFormat(date);
    }
    this.dateTrainings = this.trainings.filter(training => training.dateAttended === date_string);
  }

  private dateFormat(date) {
    date._i.month = date._i.month + 1;
    const date_object = {
      year: date._i.year,
      month: date._i.month.toString().length < 2 ? `0${date._i.month}` : date._i.month,
      date: date._i.date.toString().length < 2 ? `0${date._i.date}` : date._i.date,
    };
    return Object.values(date_object).join('-');
  }
  /*public openModal() {
    this.
  }*/


  // onSelect(event) {
  //   console.log(event);
  //   this.selectedDate = event;
  // }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { MatCalendar } from '@angular/material';
import { Moment } from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mar-chart',
  templateUrl: './mar-chart.component.html',
  styleUrls: ['./mar-chart.component.scss']
})
export class MarChartComponent implements OnInit {

  newMedPopup = false;
  editMedPopup = false;

  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;

  constructor(private _pageloaderService: pageloaderService, private router: Router) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Mar Chart')
  }


  close_onClick(e) {
    this.newMedPopup = false;
    this.editMedPopup = false;
  }


  onShowNewMed() {
    this.newMedPopup = true;
    this.editMedPopup = false;
  }

  onEditNewMed() {
    this.newMedPopup = false;
    this.editMedPopup = true;
  }

  onHome() {
    this.router.navigate(['/core-module/forms/form-list']);
  }
}

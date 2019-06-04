import { Component, OnInit } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observation-chart',
  templateUrl: './observation-chart.component.html',
  styleUrls: ['./observation-chart.component.scss']
})
export class ObservationChartComponent implements OnInit {

  newObsRecord = false;

  constructor(private _pageloaderService: pageloaderService, private router: Router) { }


  ngOnInit() {
    this._pageloaderService.setTitle('Observation Chart')
  }

  close_onClick(e) {
    this.newObsRecord = false;
  }

  onShowNewOBS() {
    this.newObsRecord = true;
  }


  onHome() {
    this.router.navigate(['/core-module/forms/form-list']);
  }
}

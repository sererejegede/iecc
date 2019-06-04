import { Component, OnInit } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abc-chart',
  templateUrl: './abc-chart.component.html',
  styleUrls: ['./abc-chart.component.scss']
})
export class AbcChartComponent implements OnInit {

  newABCPopup = false;

  constructor(private _pageloaderService: pageloaderService, private router: Router) { }

  ngOnInit() {
    this._pageloaderService.setTitle('ABC (ANTECEDENT, BEHAVIOR, CONSEQUENCE) Chart')
  }

  close_onClick(e) {
    this.newABCPopup = false;
  }

  onShowNewABC(){
    this.newABCPopup = true;
  }

  onHome() {
    this.router.navigate(['/core-module/forms/form-list']);
  }
}

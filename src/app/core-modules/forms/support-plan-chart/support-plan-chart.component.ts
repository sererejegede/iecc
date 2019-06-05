import { Component, OnInit } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support-plan-chart',
  templateUrl: './support-plan-chart.component.html',
  styleUrls: ['./support-plan-chart.component.scss']
})
export class SupportPlanChartComponent implements OnInit {

  constructor(private _pageloaderService: pageloaderService, private router: Router) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Support Plan Chart')
  }

  onHome() {
    this.router.navigate(['/core-module/forms/form-list']);
  }
}

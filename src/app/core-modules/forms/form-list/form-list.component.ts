import { Component, OnInit, AfterViewInit } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit, AfterViewInit {


  constructor(private _pageloaderService: pageloaderService, private router: Router) { }

  ngOnInit() {
  }

  onFire() {
    // console.log('after');
    // this._pageloaderService.setTitle('Forms & Records')
  }

  ngAfterViewInit() {
  }

  onCallMarChart() {
    this.router.navigate(['/core-module/forms/mar-chart']);
  }

  onCallABCChart() {
    this.router.navigate(['/core-module/forms/abc-chart']);
  }

  onCallObservationChart() {
    this.router.navigate(['/core-module/forms/observation-chart']);
  }

  onCallSupportChart() {
    this.router.navigate(['/core-module/forms/support-plan-chart']);
  }
}

import { Component, OnInit } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-payroll-report',
  templateUrl: './payroll-report.component.html',
  styleUrls: ['./payroll-report.component.scss']
})
export class PayrollReportComponent implements OnInit {

  LineChart = [];
  constructor(private _pageloaderService: pageloaderService, ) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Payroll Reports')
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["1 April", "8 April", "16 April", "28 April", "30 April"],
        datasets: [{
          label: "Your Shift",
          data: [100000, 40000, 150000, 120000, 20000],
          fill: true,
          backgroudColor: "#9EA7BB",
          pointBackgroundColor: 'white',
          lineTension: 0.5,
          borderColor: "#004983",
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          easing: 'easeInOutQuad',
          duration: 520
        },
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            fontColor: '#9EA7BB'
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              drawBorder: false,
              color: "#C4C4C4",
              borderDash: [8, 15],
            },
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5
            }
          }],
          xAxes: [{
            gridLines: {
              drawBorder: false,
              display: false
            },
          }]
        }
      }
    });
  }

}

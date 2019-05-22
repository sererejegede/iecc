import { Component, OnInit } from '@angular/core';
import { pageloaderService } from './../../services/pageloaderService';
import { FormControl } from '@angular/forms';
import { Chart } from 'chart.js';
import { MapService } from '../map/map.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  LineChart = [];
  lat: string = '';
  lng: string = '';
  location: Object;

  constructor(
    private _pageloaderService: pageloaderService,
    private map: MapService
  ) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data =>{
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })
    
    this._pageloaderService.setTitle('Dashboard')
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

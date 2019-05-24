import { Component, OnInit } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { MapService } from '../map/map.service';

@Component({
  selector: 'app-staff-tracking',
  templateUrl: './staff-tracking.component.html',
  styleUrls: ['./staff-tracking.component.scss']
})
export class StaffTrackingComponent implements OnInit {

  lat: string = '';
  lng: string = '';
  location: Object;
  constructor(private _pageloaderService: pageloaderService,
    private map: MapService
  ) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })
    this._pageloaderService.setTitle('Staff Tracking')
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-observation-chart',
  templateUrl: './new-observation-chart.component.html',
  styleUrls: ['./new-observation-chart.component.scss']
})
export class NewObservationChartComponent implements OnInit {
  
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  close_onClick() {
    this.closeModal.emit(true);
  }

}

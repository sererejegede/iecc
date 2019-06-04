import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-medication',
  templateUrl: './new-medication.component.html',
  styleUrls: ['./new-medication.component.scss']
})
export class NewMedicationComponent implements OnInit {
  
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  close_onClick() {
    this.closeModal.emit(true);
  }

}

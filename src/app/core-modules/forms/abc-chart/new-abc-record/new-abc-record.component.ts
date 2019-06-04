import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-abc-record',
  templateUrl: './new-abc-record.component.html',
  styleUrls: ['./new-abc-record.component.scss']
})
export class NewAbcRecordComponent implements OnInit {

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  close_onClick() {
    this.closeModal.emit(true);
  }
}

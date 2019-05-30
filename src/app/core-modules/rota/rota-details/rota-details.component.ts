import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rota-details',
  templateUrl: './rota-details.component.html',
  styleUrls: ['./rota-details.component.scss']
})
export class RotaDetailsComponent implements OnInit {

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  close_onClick() {
    this.closeModal.emit(true);
  }

}

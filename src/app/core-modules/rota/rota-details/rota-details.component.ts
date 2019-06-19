import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Roaster} from '../../../models/roaster';
import {RoasterService} from '../../../services/roaster.service';

@Component({
  selector: 'app-rota-details',
  templateUrl: './rota-details.component.html',
  styleUrls: ['./rota-details.component.scss']
})
export class RotaDetailsComponent implements OnInit {

  @Input() roasterDetails: Roaster;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private _roasterService: RoasterService) { }

  ngOnInit() {
    console.log(this.roasterDetails);
  }

  close_onClick() {
    this.closeModal.emit(true);
  }

  public updateRoasterOngoing() {
    this._roasterService.updateRoasterOngoing(this.roasterDetails._id).subscribe(res => {
      this.roasterDetails.status = res['data'].status;
      this.close_onClick();
    }, err => {
      console.log();
    });
  }

  public updateRoasterCompleted() {
    this._roasterService.updateRoasterCompleted(this.roasterDetails._id).subscribe(res => {
      this.roasterDetails.status = res['data'].status;
      this.close_onClick();
    }, err => {
      console.log();
    });
  }

}

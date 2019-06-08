import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { IRequest } from 'src/app/models/requestInterface';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {

  requests: any;
  user;
  requestForm: FormGroup;

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    private _requestService: RequestService,
    private _locker: CoolLocalStorage,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.user = this._locker.getObject('selectedUser');
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('modal-baseWrap');
    this.requestForm = this._formBuilder.group({
      userId: this.user.data._id,
      requestType: ['', [<any>Validators.required]],
      startDate: ['', [<any>Validators.required]],
      startTime: ['', []],
      duration: ['', []],
      reasons: ['', [<any>Validators.required]]
    });
  }


  onSaveRequest() {
    const requestModel = <IRequest>{
      userId: this.user.data._id,
      requestType: this.requestForm.controls['requestType'].value,
      startDate: this.requestForm.controls['startDate'].value,
      startTime: this.requestForm.controls['startTime'].value,
      duration: this.requestForm.controls['duration'].value,
      reasons: this.requestForm.controls['reasons'].value
    }
    this._requestService.postRequest(requestModel).subscribe(
      (payload: any) => {
        Swal.fire({
          type: 'success',
          title: 'Request Successfull',
          showCancelButton: false,
          timer: 1500
        })
        console.log(payload);
        this.close_onClick();
      },
      (error) => {
        Swal.fire({
          type: 'warning',
          title: 'Error making Request',
          showConfirmButton: false,
          timer: 1500
        });
        this.close_onClick();
      }
    )
  }

  close_onClick() {
    this.closeModal.emit(true);
  }
}

import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientService } from 'src/app/services/clients.service';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { FormGroup, FormBuilder } from '@angular/forms';
import { copyStyles } from '@angular/animations/browser/src/util';
import { Roaster } from 'src/app/models/roaster';
import { IRoasterShift } from 'src/app/models/roasterShift';
import { RoasterService } from 'src/app/services/roaster.service';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-roster',
  templateUrl: './new-roster.component.html',
  styleUrls: ['./new-roster.component.scss']
})
export class NewRosterComponent implements OnInit {

  clients: any;
  users: any;
  roasterForm: FormGroup;

  @Input() selectedRoaster;
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private _locker: CoolLocalStorage,
    private _clientService: ClientService,
    private _formBuilder: FormBuilder,
    private _roasterService: RoasterService,
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('modal-baseWrap');
    this.roasterForm = this._formBuilder.group({
      selectedUserId: ['', []],
      status: ['', []],
      selectedClientId: ['', []],
      starts: ['', []],
      ends: ['', []],
      location: ['']
    });
    // this.user = this._locker.getObject('selectedUser');
    this.getClients();
    this.getStaff();
  }

  private patchValue() {
    console.log(this.selectedRoaster);
    const data: any = {
      starts: new Date(this.selectedRoaster.shift.starts).toTimeString().slice(0, 8),
      ends: new Date(this.selectedRoaster.shift.ends).toTimeString().slice(0, 8),
      location: this.selectedRoaster.location ? this.selectedRoaster.location : '',
      selectedClientId: this.selectedRoaster.clientId
    };
    this.roasterForm.patchValue(data);
    console.log(this.roasterForm.value);
  }

  private getStaff() {
    this._userService.getStaffs().subscribe(
      (payloadU: any) => {
        this.users = payloadU.data;
        console.log(payloadU);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private getClients() {
    this._clientService.getClients().subscribe(
      (payload: any) => {
        this.clients = payload.data;
        if (this.selectedRoaster) {
          this.patchValue();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSaveRoaster() {
    const roasterModel = <Roaster>{
      userId: this.roasterForm.controls['selectedUserId'].value.id,
      clientId: this.roasterForm.controls['selectedClientId'].value.id,
      status: this.roasterForm.controls['status'].value,
      location: this.roasterForm.controls['location'].value,
      shift: <IRoasterShift>({
        starts: this.roasterForm.controls['starts'].value,
        ends: this.roasterForm.controls['ends'].value
      })
    };
    this._roasterService.postRoater(roasterModel).subscribe(
      (payload) => {
        Swal.fire({
          type: 'success',
          title: 'Roaster Saved Successfully',
          showCancelButton: false,
          timer: 1500
        })
        console.log(payload);
        this.close_onClick();
      },
      (error) => {
        Swal.fire({
          type: 'warning',
          title: 'Error saving',
          showConfirmButton: false,
          timer: 1500
        });
        this.close_onClick();
      }
    )
  }

  public updateRoaster() {
    this.roasterForm.value['clientId'] = this.roasterForm.value.selectedClientId;
    this._roasterService.updateRoaster(this.selectedRoaster._id, this.roasterForm.value).subscribe((res: any) => {
      Swal.fire({
        type: 'success',
        title: 'Updated successfully',
        showConfirmButton: false,
        timer: 1500
      });
      this.close_onClick(res);
      console.log(res);
    }, err => {
      Swal.fire({
        type: 'error',
        title: 'Error updating',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }


  close_onClick(type?: any) {
    this.closeModal.emit(type);
  }
}

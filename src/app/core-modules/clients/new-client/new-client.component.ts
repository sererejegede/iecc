import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/clients.service';
import swal from 'sweetalert2';
import { Client } from 'src/app/models/client';
import { IUserNOK } from 'src/app/models/userNOK';
import { ISocialWorkDetails } from 'src/app/models/socialWorkDetail';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit, OnDestroy {
  panelOpenState = false;

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  client: any = <any>{};
  clientForm: FormGroup;
  subscription: Subscription;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private _clientService: ClientService
  ) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('modal-baseWrap');
    this.clientForm = this._formBuilder.group({
      name: ['', [<any>Validators.required, Validators.minLength(3)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      password: ['', [<any>Validators.required]],
      description: ['', [<any>Validators.required]],
      telephoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(/^\+?([0-9]+)\)?[-. ]?([0-9]+)\)?[-. ]?([0-9]+)[-. ]?([0-9]+)$/)])],
      address: ['', [<any>Validators.required]],
      dateOfInitialAssessment: ['', []],
      dateOfAdmission: ['', []],
      personIdNumber: ['', []],
      nhsNumber: ['', []],
      NOKname: ['', []],
      relationship: ['', []],
      NOKtelephoneNumber: ['', []],
      NOKaddress: ['', []],
      SocialWorkname: ['', []],
      SocialWorkcompany: ['', []],
      SocialWorknumber: ['', []]
    });
  }

  onSaveClient() {
    const clientModel = <Client>{
      name: this.clientForm.controls['name'].value,
      email: this.clientForm.controls['email'].value,
      password: this.clientForm.controls['password'].value,
      description: this.clientForm.controls['description'].value,
      telephoneNumber: this.clientForm.controls['telephoneNumber'].value,
      address: this.clientForm.controls['address'].value,
      dateOfInitialAssessment: this.clientForm.controls['dateOfInitialAssessment'].value,
      dateOfAdmission: this.clientForm.controls['dateOfAdmission'].value,
      personIdNumber: this.clientForm.controls['personIdNumber'].value,
      nhsNumber: this.clientForm.controls['nhsNumber'].value,
      nextOfKin: <IUserNOK>({
        name: this.clientForm.controls['NOKname'].value,
        relationship: this.clientForm.controls['relationship'].value,
        telephoneNumber: this.clientForm.controls['NOKtelephoneNumber'].value,
        address: this.clientForm.controls['NOKaddress'].value
      }),
      socialWorkerDetail: <ISocialWorkDetails>({
        name: this.clientForm.controls['SocialWorkname'].value,
        company: this.clientForm.controls['SocialWorkcompany'].value,
        number: this.clientForm.controls['SocialWorknumber'].value
      })
    }
   this.subscription =  this._clientService.postClients(clientModel).subscribe(
      (payload) => {
        swal.fire({
          type: 'success',
          title: 'Client Saved Successfully',
          showCancelButton: false,
          timer: 1500
        })
        console.log(payload);
        this.close_onClick();
      },
      (error) => {
        swal.fire({
          type: 'warning',
          title: 'Error Occur while registering',
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

  ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}

import { Component, OnInit } from '@angular/core';
import { Roaster } from 'src/app/models/roaster';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { RoasterService } from 'src/app/services/roaster.service';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {ClientService} from '../../../services/clients.service';

@Component({
  selector: 'app-new-rota-view',
  templateUrl: './new-rota-view.component.html',
  styleUrls: ['./new-rota-view.component.scss']
})
export class NewRotaViewComponent implements OnInit {

  switch = false;
  nrScreen = true;
  newRoaster = false;
  rotaDetail = false;
  user;
  roaster: Roaster[] = [];

  rotadate = new FormControl(new Date());
  todos = [
    {
      name: 'Omolere Abiodun',
      category: 'London'
    },
    {
      name: 'Onafowora Hammed',
      category: 'Lagos, Nigeria'
    },
    {
      name: 'George Kingsley',
      category: 'Akra, Ghana'
    },
    {
      name: 'Loveth Christian',
      category: 'South Africa'
    }
  ];

  completed = [
    {
      name: 'Gabriel Okeke',
      category: 'Lagos, Nigeria'
    },
    {
      name: 'Nurudeen Njidda',
      category: 'Adamawa, Nigeria'
    },
    {
      name: 'Imolara Kazeem',
      category: 'Togoy'
    },
    {
      name: 'Orefuyi Damilola',
      category: 'Oyo, Nigeria'
    }
  ];
  public clients: any[] = [];

  constructor(private _pageloaderService: pageloaderService,
    private _locker: CoolLocalStorage,
    private _clientService: ClientService,
    private _roasterService: RoasterService) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Rota');
    this.user = this._locker.getObject('selectedUser');
    this.getClients();
    // console.log(this.rotadate);
  }

  getRoasterByDate() {
    // Convert date to string
    this.rotadate.value._i.month = this.rotadate.value._i.month + 1;
    const date_object = {
      year: this.rotadate.value._i.year,
      month: this.rotadate.value._i.month.toString().length < 2 ? `0${this.rotadate.value._i.month}` : this.rotadate.value._i.month,
      date: this.rotadate.value._i.date.toString().length < 2 ? `0${this.rotadate.value._i.date}` : this.rotadate.value._i.date,
    };
    const date_string = Object.values(date_object).join('-');
    this._roasterService.getRoasterByDate(date_string).subscribe(
      (payload: any) => {
        this.roaster = payload;
        payload.data.forEach(load => {
          this.clients.forEach(client => {
            if (load.clientId === client._id) {
              load['user'] = client;
            }
          });
        });
        console.log(payload);
        this.todos = payload.data.filter(roaster => roaster.status === 'pending');
        this.completed = payload.data.filter(roaster => roaster.status === 'completed');
      },
      (error) => {
        console.log(error);
      });
  }

  private getClients() {
    this._clientService.getClients().subscribe(
      (payload: any) => {
        this.clients = payload.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  close_onClick(e) {
    this.newRoaster = false;
    this.rotaDetail = false;
  }

  onShowAddRota() {
    this.newRoaster = true;
    this.rotaDetail = false;
  }
  onShowRotaDetail() {
    this.newRoaster = false;
    this.rotaDetail = true;
  }

  onSelectSwitchBtn() {
    this.switch = true;
    this.nrScreen = false;
  }

  onCancelSwitchBtn() {
    this.switch = false;
    this.nrScreen = true;
  }

  selectedDate() {
    this.getRoasterByDate();
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

}

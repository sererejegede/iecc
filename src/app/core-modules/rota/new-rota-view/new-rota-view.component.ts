import { Component, OnInit } from '@angular/core';
import { Roaster } from 'src/app/models/roaster';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { RoasterService } from 'src/app/services/roaster.service';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {ClientService} from '../../../services/clients.service';
import {UserService} from '../../../services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-new-rota-view',
  templateUrl: './new-rota-view.component.html',
  styleUrls: ['./new-rota-view.component.scss']
})
export class NewRotaViewComponent implements OnInit {

  public switch = false;
  public nrScreen = true;
  public newRoaster = false;
  public rotaDetail = false;
  public swap = {
    index: 0,
    firstRoasterId: 0,
    secondRoasterId: 0
  };
  public user;
  public roaster: Roaster[] = [];
  public rotadate = new FormControl(new Date());
  public todos = [];
  public completed = [];
  public clients: any[] = [];
  public selectedRoaster: any;

  constructor(private _pageloaderService: pageloaderService,
    private _locker: CoolLocalStorage,
    private _userService: UserService,
    private _clientService: ClientService,
    private _roasterService: RoasterService) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Rota');
    this.user = this._locker.getObject('selectedUser');
    this.getUsers();
  }

  getRoasterByDate(onInit?) {
    // Convert date to string
    let date_string;
    if (onInit) {
      date_string = new Date().toISOString().slice(0, 10);
    } else {
      this.rotadate.value._i.month = this.rotadate.value._i.month + 1;
      const date_object = {
        year: this.rotadate.value._i.year,
        month: this.rotadate.value._i.month.toString().length < 2 ? `0${this.rotadate.value._i.month}` : this.rotadate.value._i.month,
        date: this.rotadate.value._i.date.toString().length < 2 ? `0${this.rotadate.value._i.date}` : this.rotadate.value._i.date,
      };
      date_string = Object.values(date_object).join('-');
    }
    this._roasterService.getRoasterByDate(date_string).subscribe(
      (payload: any) => {
        this.roaster = payload;
        payload.data.forEach(load => {
          this.clients.forEach(client => {
            if (load.clientId === client._id) {
              load['client'] = client;
            }
          });
        });
        console.log(payload);
        this.todos = payload.data.filter(roaster => (['pending', 0, '0', 'ongoing', 1, '1'].includes(roaster.status)));
        this.completed = payload.data.filter(roaster => roaster.status === 'completed');
      },
      (error) => {
        console.log(error);
      });
  }

  private getUsers() {
    this._clientService.getClients().subscribe(
      (payload: any) => {
        this.clients = payload.data;
        this.getRoasterByDate(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  close_onClick(e) {
    // console.log('from modal', e);
    this.newRoaster = false;
    this.rotaDetail = false;
    if (this.selectedRoaster) {
      if (this.selectedRoaster.status === 'completed') {
        this.todos.splice(this.selectedRoaster['index'], 1);
        this.completed.unshift(this.selectedRoaster);
      }
      if (e && typeof e !== 'boolean') {
        this.getRoasterByDate(true);
      }
    }
  }

  onShowAddRota(rota?, index?) {
    this.newRoaster = true;
    this.rotaDetail = false;
    this.selectedRoaster = rota;
    this.selectedRoaster['index'] = index;
  }
  onShowRotaDetail(roaster, index) {
    this.newRoaster = false;
    this.rotaDetail = true;
    this.selectedRoaster = roaster;
    this.selectedRoaster['index'] = index;
  }

  onSelectSwitchBtn(todo_id?, index?) {
    this.switch = true;
    this.nrScreen = false;
    if ((index || index === 0) && todo_id) {
      this.swap.index = index;
      this.swap.firstRoasterId = todo_id;
    }
  }

  public swapRoaster() {
    this._roasterService.swapRoaster(this.swap).subscribe(res => {
      this.onCancelSwitchBtn();
      this.getRoasterByDate(true);
      swal.fire({
        type: 'success',
        title: 'Roaster swapped successfully',
        showCancelButton: false,
        timer: 1500
      });
    }, err => {
      swal.fire({
        type: 'error',
        title: 'Could not swap roaster',
        showCancelButton: false,
        timer: 1500
      });
      console.log(err);
    });
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

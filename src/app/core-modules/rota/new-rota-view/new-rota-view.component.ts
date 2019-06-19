import { Component, OnInit } from '@angular/core';
import { Roaster } from 'src/app/models/roaster';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { RoasterService } from 'src/app/services/roaster.service';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {ClientService} from '../../../services/clients.service';
import {UserService} from '../../../services/user.service';

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
  public users: any[] = [];
  public selectedRoaster: any;

  constructor(private _pageloaderService: pageloaderService,
    private _locker: CoolLocalStorage,
    private _userService: UserService,
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
          this.users.forEach(user => {
            if (load.userId === user._id) {
              load['user'] = user;
            }
          });
        });
        console.log(payload);
        this.todos = payload.data.filter(roaster => (roaster.status === 'pending' || roaster.status === 'ongoing'));
        this.completed = payload.data.filter(roaster => roaster.status === 'completed');
      },
      (error) => {
        console.log(error);
      });
  }

  private getUsers() {
    this._userService.getAllUser().subscribe(
      (payload: any) => {
        this.users = payload.data;
        this.getRoasterByDate(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  close_onClick(e) {
    this.newRoaster = false;
    this.rotaDetail = false;
    if (this.selectedRoaster.status === 'completed') {
      this.todos.splice(this.selectedRoaster['index'], 1);
      this.completed.unshift(this.selectedRoaster);
    }
  }

  onShowAddRota() {
    this.newRoaster = true;
    this.rotaDetail = false;
  }
  onShowRotaDetail(roaster, index) {
    this.newRoaster = false;
    this.rotaDetail = true;
    this.selectedRoaster = roaster;
    this.selectedRoaster['index'] = index;
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

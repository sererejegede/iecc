import { Component, OnInit } from '@angular/core';
import { Roaster } from 'src/app/models/roaster';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { RoasterService } from 'src/app/services/roaster.service';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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

  constructor(private _pageloaderService: pageloaderService,
    private _locker: CoolLocalStorage,
    private _roasterService: RoasterService) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Rota')
    this.user = this._locker.getObject('selectedUser');
    console.log(this.rotadate);
  }

  getRoasterByDate() {
    this._roasterService.getRoasterByDate(this.rotadate).subscribe(
      (payload: any) => {
        this.roaster = payload;
        console.log(payload);
      },
      (error) => {

      }
    )
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

  selectedDate(){
    this.getRoasterByDate();
  }


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

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { UserService } from 'src/app/services/user.service';
import { CoolLocalStorage } from 'angular2-cool-storage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {

  showChatBody = false;
  staffs: any;
  user;

  selectedStaff: any;
  constructor( private _pageloaderService: pageloaderService,
    private _userService: UserService,
    private _locker: CoolLocalStorage,) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Chat')
    this._userService.getStaffs().subscribe(
      (payloadU: any) => {
        this.staffs = payloadU.data;
        console.log(payloadU);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSelectedUser(staff){
    this.selectedStaff = staff;
    this.user = this._locker.getObject('selectedUser');
    this.showChatBody = true;
  }

}

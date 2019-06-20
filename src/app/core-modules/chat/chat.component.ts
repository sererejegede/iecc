import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { UserService } from 'src/app/services/user.service';
import { CoolLocalStorage } from 'angular2-cool-storage';
import {ChatService} from '../../services/chat.service';

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
  public messages: any[] = [];

  selectedStaff: any;
  constructor( private _pageloaderService: pageloaderService,
    private _userService: UserService,
    private _chatService: ChatService,
    private _locker: CoolLocalStorage) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Chat');
    this.getStaffs();
  }
  public getStaffs() {
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
  public getUserChats(id) {
    this.user = this._locker.getObject('selectedUser');
    console.log('This.user ', this.user);
    this._chatService.getMessages(id).subscribe(
      (response: any) => {
        console.log(response);
        this.messages = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSelectedUser(staff) {
    this.selectedStaff = staff;
    this.user = this._locker.getObject('selectedUser');
    this.showChatBody = true;
    this.getUserChats(staff._id);
  }

}

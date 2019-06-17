import { Component, OnInit } from '@angular/core';
import { pageloaderService } from 'src/app/services/pageloaderService';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { ClientService } from 'src/app/services/clients.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  profileForm: FormGroup;
  user;

  constructor(private _pageloaderService: pageloaderService,
    private _locker: CoolLocalStorage,
    private _clientService: ClientService,
    private _userService: UserService,    
    private _formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this._pageloaderService.setTitle('Setting')
    this.user = this._locker.getObject('selectedUser');
    this.profileForm = this._formBuilder.group({
      userId: this.user._id,
      image:['', []]
    });
  }

  onLogout() {
    this.router.navigate(['/login']);
  }

  onUploadProfilePicture(){
    this._userService.updateProfileImage(this.profileForm.value).subscribe(
      (payload:any) => {
        console.log(this.profileForm.value);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
